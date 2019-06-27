const clusterMockFun = require("./ac/clusters");
const hostMockFun = require("./ac/hosts");
const pumpsMockFun = require("./ac/pumps");
const towerMockFun = require("./ac/towers");
const modelMockFun = require("./models");
const producerMockFun = require("./producers");
const powerAggMockFun = require("./aggs/power");
const statisticsMockFun = require("./statistics");
const strategiyMockFun = require("./strategies");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }
  next();
};

const rewrites = {
  "/ac/clusters*": "/clusters$1",
  "/ac/hosts*": "/hosts$1",
  "/ac/towers*": "/towers$1",
  "/ac/pumps*": "/pumps$1",
  "/aggs/power*": "/powerAggs$1",
};

/**
 * mock
 *
 * @param {object} opt mock options
 * @param {number} opt.count how many pets to be generated
 */
const mock = () => ({
  /**
   * mock data
   */
  db: {
    clusters: clusterMockFun({}),
    hosts: hostMockFun({}),
    pumps: pumpsMockFun({}),
    towers: towerMockFun({}),
    models: modelMockFun({}),
    producers: producerMockFun({}),
    powerAggs: powerAggMockFun({}),
    statistics: statisticsMockFun({}),
    strategies: strategiyMockFun({}),
  },

  /**
   * rewrite
   */
  rewrites,

  routers: [myRouter],
});

module.exports = mock;
