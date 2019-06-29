const faker = require("faker");
const _ = require("lodash");
const querystring = require("querystring");
const moment = require("moment");

const parseUrlQuery = url => {
  const urls = url.split("?");

  if (!urls[1]) return {};

  return querystring.parse(urls[1]);
};

const fakeTragetOneHour = () => {
  // 电费单位
  const charge = faker.random.number({ min: 425, max: 1025 }) / 1000;

  const load = faker.random.number({ min: 10, max: 25 });

  return {
    energy: load,
    fee: load * charge,
    load: load, // 平均功率
  };
};

function genRouter(targets = []) {
  const db = [];

  for (const target of targets) {
    const { id, type, brands, model, producer, ns } = target;

    // 每台设备生成两年的数据最小单位为小时
    const start = moment()
      .subtract(1, "year")
      .startOf("year")
      .unix();

    const end = moment()
      .endOf("hour")
      .unix();

    // 按每小时循环
    for (let t = start; t <= end; t = t + 3600) {
      const time = moment.unix(t);
      db.push({
        year: time.year(),
        month: time.month() + 1,
        day: time.date(),
        hour: time.hour(),
        time: time.toISOString(),
        target: id,
        targetType: type,
        brands,
        model,
        producer,
        ns,
        ...fakeTragetOneHour(),
      });
    }
  }

  const router = (req, res, next) => {
    if (req.path.indexOf("/powerAggs") !== -1 && req.method === "GET") {
      const query = parseUrlQuery(req.url);

      const {
        _group,
        time_gt = moment().startOf("day"),
        time_lt = moment(),
        target,
        targetType,
      } = query;

      // 默认获取今日数据
      const start = moment(time_gt);
      const end = moment(time_lt);

      let chain = _.chain(db).filter(r => {
        return moment(r.time).isBetween(start, end);
      });

      // filter 数据
      if (target) {
        chain = chain.filter(r => r.target === target);
      }

      if (targetType) {
        chain = chain.filter(r => r.targetType === targetType);
      }

      // group 数据
      let group;
      if (typeof _group === "string") {
        group = [_group];
      }

      if (_.isArray(_group)) {
        group = _group;
      }

      let ret;
      if (_.isArray(group) && !_.isEmpty(group)) {
        chain = chain.groupBy(r => {
          const fields = group.map(f => r[f]).filter(f => f);

          return fields.join("-");
        });

        const grouped = chain.value();

        ret = Object.keys(grouped).map(k => {
          const fileds = k.split("-");

          const dimensions = {};

          for (let i = 0; i < group.length; i++) {
            dimensions[group[i]] = fileds[i];
          }

          return {
            energy: _.sumBy(grouped[k], "energy"),
            fee: _.sumBy(grouped[k], "fee"),
            load: _.sumBy(grouped[k], "load"),
            ...dimensions,
          };
        });
      } else {
        ret = chain.value();
      }

      return res.json(ret);
    }

    next();
  };

  return router;
}

module.exports = genRouter;
