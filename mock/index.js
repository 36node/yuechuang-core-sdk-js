const clusterMockFun = require("./ac/clusters");
const hostMockFun = require("./ac/hosts");
const pumpsMockFun = require("./ac/pumps");
const towerMockFun = require("./ac/towers");
const modelMockFun = require("./models");
const producerMockFun = require("./producers");
const statisticsMockFun = require("./statistics");
const strategiyMockFun = require("./strategies");
const weatherMockFun = require("./weather");

const powerAggRouterFun = require("./aggs/power");

const rewrites = {
  "/ac/clusters*": "/clusters$1",
  "/ac/hosts*": "/hosts$1",
  "/ac/towers*": "/towers$1",
  "/ac/pumps*": "/pumps$1",
  "/aggs/power*": "/powerAggs$1",
};

// const defaultTargets = [
//   {
//     id: "host1",
//     type: "AC_HOST",
//     producer: "远大空调有限公司",
//   },
//   {
//     id: "host2",
//     type: "AC_HOST",
//     producer: "远大空调有限公司",
//   },
//   {
//     id: "cluster1",
//     type: "AC_CLUSTER",
//     producer: "日立中央空调",
//   },
//   {
//     id: "tower1",
//     type: "AC_TOWER",
//     producer: "海尔",
//   },
//   {
//     id: "pump1",
//     type: "AC_PUMP",
//     producer: "格力",
//   },
// ];

/**
 * mock
 *
 * @param {object} opt mock options
 * @param {number} opt.count how many pets to be generated
 */
const mock = ({}) => {
  const clusters = clusterMockFun({});
  const hosts = hostMockFun({});
  const pumps = pumpsMockFun({});
  const towers = towerMockFun({});

  const targets = [
    ...clusters.map(c => ({ ...c, type: "AC_CLUSTER" })),
    ...hosts.map(h => ({ ...h, type: "AC_HOST" })),
    ...pumps.map(p => ({ ...p, type: "AC_PUMP" })),
    ...towers.map(t => ({ ...t, type: "AC_TOWER" })),
  ];

  const powerAggRouter = powerAggRouterFun(targets);

  return {
    /**
     * mock data
     */
    db: {
      clusters,
      hosts,
      pumps,
      towers,
      models: modelMockFun({}),
      producers: producerMockFun({}),
      statistics: statisticsMockFun({}),
      strategies: strategiyMockFun({}),
      powerAggs: {},
      weather: weatherMockFun({}),
    },

    /**
     * rewrite
     */
    rewrites,

    routers: [powerAggRouter],
  };
};

module.exports = mock;
