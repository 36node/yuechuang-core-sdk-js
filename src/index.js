import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * airConditioner's methods
   */
  airConditioner = {
    /**
     * List all air conditioner clusters
     *
     * @param {ListClustersRequest} req listClusters request
     * @returns {Promise<ListClustersResponse>} A paged array of air conditioner clusters
     */
    listClusters: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/ac/clusters`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an air conditioner cluster
     *
     * @param {CreateClusterRequest} req createCluster request
     * @returns {Promise<CreateClusterResponse>} The air conditioner cluster created
     */
    createCluster: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createCluster");

      return fetch(`${this.base}/ac/clusters`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get cluster by id
     *
     * @param {GetClusterRequest} req getCluster request
     * @returns {Promise<GetClusterResponse>} The air conditioner cluster with given id
     */
    getCluster: (req = {}) => {
      const { clusterId, headers } = req;

      if (!clusterId) throw new Error("clusterId is required for getCluster");

      return fetch(`${this.base}/ac/clusters/${clusterId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update a air conditioner cluster by id
     *
     * @param {UpdateClusterRequest} req updateCluster request
     * @returns {Promise<UpdateClusterResponse>} The air conditioner cluster
     */
    updateCluster: (req = {}) => {
      const { clusterId, headers, body } = req;

      if (!clusterId) throw new Error("clusterId is required for updateCluster");
      if (!body) throw new Error("requetBody is required for updateCluster");

      return fetch(`${this.base}/ac/clusters/${clusterId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteClusterRequest} req deleteCluster request
     * @returns {Promise<DeleteClusterResponse>} cluster deleted
     */
    deleteCluster: (req = {}) => {
      const { clusterId, headers } = req;

      if (!clusterId) throw new Error("clusterId is required for deleteCluster");

      return fetch(`${this.base}/ac/clusters/${clusterId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner cluster snapshot by id
     *
     * @param {GetClusterSnapshotRequest} req getClusterSnapshot request
     * @returns {Promise<GetClusterSnapshotResponse>} The air conditioner cluster snapshot
     */
    getClusterSnapshot: (req = {}) => {
      const { clusterId, headers } = req;

      if (!clusterId) throw new Error("clusterId is required for getClusterSnapshot");

      return fetch(`${this.base}/ac/clusters/${clusterId}/snapshot`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner cluster records
     *
     * @param {GetClusterRecordsRequest} req getClusterRecords request
     * @returns {Promise<GetClusterRecordsResponse>} The air conditioner cluster record
     */
    getClusterRecords: (req = {}) => {
      const { clusterId, query, headers } = req;

      if (!clusterId) throw new Error("clusterId is required for getClusterRecords");

      return fetch(`${this.base}/ac/clusters/${clusterId}/records`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all air conditioner hosts
     *
     * @param {ListHostsRequest} req listHosts request
     * @returns {Promise<ListHostsResponse>} A paged array of air conditioner hosts
     */
    listHosts: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/ac/hosts`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an air conditioner host
     *
     * @param {CreateHostRequest} req createHost request
     * @returns {Promise<CreateHostResponse>} The air conditioner host created
     */
    createHost: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createHost");

      return fetch(`${this.base}/ac/hosts`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get host by id
     *
     * @param {GetHostRequest} req getHost request
     * @returns {Promise<GetHostResponse>} The air conditioner host with given id
     */
    getHost: (req = {}) => {
      const { hostId, headers } = req;

      if (!hostId) throw new Error("hostId is required for getHost");

      return fetch(`${this.base}/ac/hosts/${hostId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update a air conditioner host by id
     *
     * @param {UpdateHostRequest} req updateHost request
     * @returns {Promise<UpdateHostResponse>} The air conditioner host
     */
    updateHost: (req = {}) => {
      const { hostId, headers, body } = req;

      if (!hostId) throw new Error("hostId is required for updateHost");
      if (!body) throw new Error("requetBody is required for updateHost");

      return fetch(`${this.base}/ac/hosts/${hostId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteHostRequest} req deleteHost request
     * @returns {Promise<DeleteHostResponse>} host deleted
     */
    deleteHost: (req = {}) => {
      const { hostId, headers } = req;

      if (!hostId) throw new Error("hostId is required for deleteHost");

      return fetch(`${this.base}/ac/hosts/${hostId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner host snapshot by id
     *
     * @param {GetHostSnapshotRequest} req getHostSnapshot request
     * @returns {Promise<GetHostSnapshotResponse>} The air conditioner host snapshot
     */
    getHostSnapshot: (req = {}) => {
      const { hostId, headers } = req;

      if (!hostId) throw new Error("hostId is required for getHostSnapshot");

      return fetch(`${this.base}/ac/hosts/${hostId}/snapshot`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner host records
     *
     * @param {GetHostRecordsRequest} req getHostRecords request
     * @returns {Promise<GetHostRecordsResponse>} The air conditioner host record
     */
    getHostRecords: (req = {}) => {
      const { hostId, query, headers } = req;

      if (!hostId) throw new Error("hostId is required for getHostRecords");

      return fetch(`${this.base}/ac/hosts/${hostId}/records`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all air conditioner pumps
     *
     * @param {ListPumpsRequest} req listPumps request
     * @returns {Promise<ListPumpsResponse>} A paged array of air conditioner pumps
     */
    listPumps: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/ac/pumps`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an air conditioner pump
     *
     * @param {CreatePumpRequest} req createPump request
     * @returns {Promise<CreatePumpResponse>} The air conditioner pump created
     */
    createPump: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createPump");

      return fetch(`${this.base}/ac/pumps`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get pump by id
     *
     * @param {GetPumpRequest} req getPump request
     * @returns {Promise<GetPumpResponse>} The air conditioner pump with given id
     */
    getPump: (req = {}) => {
      const { pumpId, headers } = req;

      if (!pumpId) throw new Error("pumpId is required for getPump");

      return fetch(`${this.base}/ac/pumps/${pumpId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update a air conditioner pump by id
     *
     * @param {UpdatePumpRequest} req updatePump request
     * @returns {Promise<UpdatePumpResponse>} The air conditioner pump
     */
    updatePump: (req = {}) => {
      const { pumpId, headers, body } = req;

      if (!pumpId) throw new Error("pumpId is required for updatePump");
      if (!body) throw new Error("requetBody is required for updatePump");

      return fetch(`${this.base}/ac/pumps/${pumpId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeletePumpRequest} req deletePump request
     * @returns {Promise<DeletePumpResponse>} pump deleted
     */
    deletePump: (req = {}) => {
      const { pumpId, headers } = req;

      if (!pumpId) throw new Error("pumpId is required for deletePump");

      return fetch(`${this.base}/ac/pumps/${pumpId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner pump snapshot by id
     *
     * @param {GetPumpSnapshotRequest} req getPumpSnapshot request
     * @returns {Promise<GetPumpSnapshotResponse>} The air conditioner pump snapshot
     */
    getPumpSnapshot: (req = {}) => {
      const { pumpId, headers } = req;

      if (!pumpId) throw new Error("pumpId is required for getPumpSnapshot");

      return fetch(`${this.base}/ac/pumps/${pumpId}/snapshot`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner pump records
     *
     * @param {GetPumpRecordsRequest} req getPumpRecords request
     * @returns {Promise<GetPumpRecordsResponse>} The air conditioner pump record
     */
    getPumpRecords: (req = {}) => {
      const { pumpId, query, headers } = req;

      if (!pumpId) throw new Error("pumpId is required for getPumpRecords");

      return fetch(`${this.base}/ac/pumps/${pumpId}/records`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all air conditioner cooling towers
     *
     * @param {ListTowersRequest} req listTowers request
     * @returns {Promise<ListTowersResponse>} A paged array of air conditioner cooling towers
     */
    listTowers: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/ac/towers`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an air conditioner cooling tower
     *
     * @param {CreateTowerRequest} req createTower request
     * @returns {Promise<CreateTowerResponse>} The air conditioner cooling tower created
     */
    createTower: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createTower");

      return fetch(`${this.base}/ac/towers`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get tower by id
     *
     * @param {GetTowerRequest} req getTower request
     * @returns {Promise<GetTowerResponse>} The air conditioner cooling tower with given id
     */
    getTower: (req = {}) => {
      const { towerId, headers } = req;

      if (!towerId) throw new Error("towerId is required for getTower");

      return fetch(`${this.base}/ac/towers/${towerId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update a air conditioner cooling tower by id
     *
     * @param {UpdateTowerRequest} req updateTower request
     * @returns {Promise<UpdateTowerResponse>} The air conditioner cooling tower
     */
    updateTower: (req = {}) => {
      const { towerId, headers, body } = req;

      if (!towerId) throw new Error("towerId is required for updateTower");
      if (!body) throw new Error("requetBody is required for updateTower");

      return fetch(`${this.base}/ac/towers/${towerId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteTowerRequest} req deleteTower request
     * @returns {Promise<DeleteTowerResponse>} tower deleted
     */
    deleteTower: (req = {}) => {
      const { towerId, headers } = req;

      if (!towerId) throw new Error("towerId is required for deleteTower");

      return fetch(`${this.base}/ac/towers/${towerId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner tower snapshot by id
     *
     * @param {GetTowerSnapshotRequest} req getTowerSnapshot request
     * @returns {Promise<GetTowerSnapshotResponse>} The air conditioner tower snapshot
     */
    getTowerSnapshot: (req = {}) => {
      const { towerId, headers } = req;

      if (!towerId) throw new Error("towerId is required for getTowerSnapshot");

      return fetch(`${this.base}/ac/towers/${towerId}/snapshot`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get air conditioner tower records
     *
     * @param {GetTowerRecordsRequest} req getTowerRecords request
     * @returns {Promise<GetTowerRecordsResponse>} The air conditioner tower record
     */
    getTowerRecords: (req = {}) => {
      const { towerId, query, headers } = req;

      if (!towerId) throw new Error("towerId is required for getTowerRecords");

      return fetch(`${this.base}/ac/towers/${towerId}/records`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * report's methods
   */
  report = {
    /**
     * Get statistics
     *
     * @param {GetStatisticsRequest} req getStatistics request
     * @returns {Promise<GetStatisticsResponse>} Statistics
     */
    getStatistics: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/statistics`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get power chart
     *
     * @param {GetPowerChartRequest} req getPowerChart request
     * @returns {Promise<GetPowerChartResponse>} Power chart，包括用电量统计和负荷
     */
    getPowerChart: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/charts/power`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * operation's methods
   */
  operation = {
    /**
     * List all strategies
     *
     * @param {ListStrategiesRequest} req listStrategies request
     * @returns {Promise<ListStrategiesResponse>} A paged array of strategies
     */
    listStrategies: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/strategies`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an strategy
     *
     * @param {CreateStrategyRequest} req createStrategy request
     * @returns {Promise<CreateStrategyResponse>} The strategy created
     */
    createStrategy: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createStrategy");

      return fetch(`${this.base}/strategies`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get strategy by id
     *
     * @param {GetStrategyRequest} req getStrategy request
     * @returns {Promise<GetStrategyResponse>} The strategy with given id
     */
    getStrategy: (req = {}) => {
      const { strategyId, headers } = req;

      if (!strategyId) throw new Error("strategyId is required for getStrategy");

      return fetch(`${this.base}/strategies/${strategyId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update a strategy by id
     *
     * @param {UpdateStrategyRequest} req updateStrategy request
     * @returns {Promise<UpdateStrategyResponse>} The strategy
     */
    updateStrategy: (req = {}) => {
      const { strategyId, headers, body } = req;

      if (!strategyId) throw new Error("strategyId is required for updateStrategy");
      if (!body) throw new Error("requetBody is required for updateStrategy");

      return fetch(`${this.base}/strategies/${strategyId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteStrategyRequest} req deleteStrategy request
     * @returns {Promise<DeleteStrategyResponse>} strategy deleted
     */
    deleteStrategy: (req = {}) => {
      const { strategyId, headers } = req;

      if (!strategyId) throw new Error("strategyId is required for deleteStrategy");

      return fetch(`${this.base}/strategies/${strategyId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * model's methods
   */
  model = {
    /**
     * 返回品牌列表
     *
     * @param {ListModelsRequest} req listModels request
     * @returns {Promise<ListModelsResponse>} A paged array of model
     */
    listModels: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/models`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * producer's methods
   */
  producer = {
    /**
     * 返回生产商列表
     *
     * @param {ListProducersRequest} req listProducers request
     * @returns {Promise<ListProducersResponse>} A paged array of vehicle producer
     */
    listProducers: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/producers`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
