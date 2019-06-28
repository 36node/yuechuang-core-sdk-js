export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  airConditioner: SDK.AirConditionerAPI;
  report: SDK.ReportAPI;
  operation: SDK.OperationAPI;
  model: SDK.ModelAPI;
  producer: SDK.ProducerAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface AirConditionerAPI {
    /**
     * List all air conditioner clusters
     */
    listClusters(req: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * Create an air conditioner cluster
     */
    createCluster(req: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * Get cluster by id
     */
    getCluster(req: GetClusterRequest): Promise<GetClusterResponse>;
    /**
     * Update a air conditioner cluster by id
     */
    updateCluster(req: UpdateClusterRequest): Promise<UpdateClusterResponse>;
    /**
     *
     */
    deleteCluster(req: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * Get air conditioner cluster snapshot by id
     */
    getClusterSnapshot(req: GetClusterSnapshotRequest): Promise<GetClusterSnapshotResponse>;
    /**
     * Get air conditioner cluster records
     */
    getClusterRecords(req: GetClusterRecordsRequest): Promise<GetClusterRecordsResponse>;
    /**
     * List all air conditioner hosts
     */
    listHosts(req: ListHostsRequest): Promise<ListHostsResponse>;
    /**
     * Create an air conditioner host
     */
    createHost(req: CreateHostRequest): Promise<CreateHostResponse>;
    /**
     * Get host by id
     */
    getHost(req: GetHostRequest): Promise<GetHostResponse>;
    /**
     * Update a air conditioner host by id
     */
    updateHost(req: UpdateHostRequest): Promise<UpdateHostResponse>;
    /**
     *
     */
    deleteHost(req: DeleteHostRequest): Promise<DeleteHostResponse>;
    /**
     * Get air conditioner host snapshot by id
     */
    getHostSnapshot(req: GetHostSnapshotRequest): Promise<GetHostSnapshotResponse>;
    /**
     * Get air conditioner host records
     */
    getHostRecords(req: GetHostRecordsRequest): Promise<GetHostRecordsResponse>;
    /**
     * List all air conditioner pumps
     */
    listPumps(req: ListPumpsRequest): Promise<ListPumpsResponse>;
    /**
     * Create an air conditioner pump
     */
    createPump(req: CreatePumpRequest): Promise<CreatePumpResponse>;
    /**
     * Get pump by id
     */
    getPump(req: GetPumpRequest): Promise<GetPumpResponse>;
    /**
     * Update a air conditioner pump by id
     */
    updatePump(req: UpdatePumpRequest): Promise<UpdatePumpResponse>;
    /**
     *
     */
    deletePump(req: DeletePumpRequest): Promise<DeletePumpResponse>;
    /**
     * Get air conditioner pump snapshot by id
     */
    getPumpSnapshot(req: GetPumpSnapshotRequest): Promise<GetPumpSnapshotResponse>;
    /**
     * Get air conditioner pump records
     */
    getPumpRecords(req: GetPumpRecordsRequest): Promise<GetPumpRecordsResponse>;
    /**
     * List all air conditioner cooling towers
     */
    listTowers(req: ListTowersRequest): Promise<ListTowersResponse>;
    /**
     * Create an air conditioner cooling tower
     */
    createTower(req: CreateTowerRequest): Promise<CreateTowerResponse>;
    /**
     * Get tower by id
     */
    getTower(req: GetTowerRequest): Promise<GetTowerResponse>;
    /**
     * Update a air conditioner cooling tower by id
     */
    updateTower(req: UpdateTowerRequest): Promise<UpdateTowerResponse>;
    /**
     *
     */
    deleteTower(req: DeleteTowerRequest): Promise<DeleteTowerResponse>;
    /**
     * Get air conditioner tower snapshot by id
     */
    getTowerSnapshot(req: GetTowerSnapshotRequest): Promise<GetTowerSnapshotResponse>;
    /**
     * Get air conditioner tower records
     */
    getTowerRecords(req: GetTowerRecordsRequest): Promise<GetTowerRecordsResponse>;
  }
  export interface ReportAPI {
    /**
     * Get statistics
     */
    getStatistics(req: GetStatisticsRequest): Promise<GetStatisticsResponse>;
    /**
     * List power aggregation
     */
    listPowerAgg(req: ListPowerAggRequest): Promise<ListPowerAggResponse>;
  }
  export interface OperationAPI {
    /**
     * List all strategies
     */
    listStrategies(req: ListStrategiesRequest): Promise<ListStrategiesResponse>;
    /**
     * Create an strategy
     */
    createStrategy(req: CreateStrategyRequest): Promise<CreateStrategyResponse>;
    /**
     * Get strategy by id
     */
    getStrategy(req: GetStrategyRequest): Promise<GetStrategyResponse>;
    /**
     * Update a strategy by id
     */
    updateStrategy(req: UpdateStrategyRequest): Promise<UpdateStrategyResponse>;
    /**
     *
     */
    deleteStrategy(req: DeleteStrategyRequest): Promise<DeleteStrategyResponse>;
  }
  export interface ModelAPI {
    /**
     * 返回品牌列表
     */
    listModels(req: ListModelsRequest): Promise<ListModelsResponse>;
  }
  export interface ProducerAPI {
    /**
     * 返回生产商列表
     */
    listProducers(req: ListProducersRequest): Promise<ListProducersResponse>;
  }

  type ListClustersRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        producer?: string;
        model?: string;
        ns?: string;
      };
    };
  };

  type ListClustersResponse = {
    body: Array<AcCluster>;
    headers: {
      xTotalCount: number;
    };
  };

  type CreateClusterRequest = {
    body: AcCluster;
  };

  type CreateClusterResponse = {
    body: AcCluster;
  };

  type GetClusterRequest = {
    clusterId: string;
  };

  type GetClusterResponse = {
    body: AcCluster;
  };

  type UpdateClusterRequest = {
    clusterId: string;
    body: AcCluster;
  };

  type UpdateClusterResponse = {
    body: AcCluster;
  };

  type DeleteClusterRequest = {
    clusterId: string;
  };

  type GetClusterSnapshotRequest = {
    clusterId: string;
  };

  type GetClusterSnapshotResponse = {
    body: AcClusterSnapshot;
  };

  type GetClusterRecordsRequest = {
    clusterId: string;

    query: {
      limit?: number;
      offset?: number;
      select?: number;

      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetClusterRecordsResponse = {
    body: AcClusterRecord;
  };

  type ListHostsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        producer?: string;
        model?: string;
        ns?: string;
      };
    };
  };

  type ListHostsResponse = {
    body: Array<AcHost>;
    headers: {
      xTotalCount: number;
    };
  };

  type CreateHostRequest = {
    body: AcHost;
  };

  type CreateHostResponse = {
    body: AcHost;
  };

  type GetHostRequest = {
    hostId: string;
  };

  type GetHostResponse = {
    body: AcHost;
  };

  type UpdateHostRequest = {
    hostId: string;
    body: AcHost;
  };

  type UpdateHostResponse = {
    body: AcHost;
  };

  type DeleteHostRequest = {
    hostId: string;
  };

  type GetHostSnapshotRequest = {
    hostId: string;
  };

  type GetHostSnapshotResponse = {
    body: AcHostSnapshot;
  };

  type GetHostRecordsRequest = {
    hostId: string;

    query: {
      limit?: number;
      offset?: number;
      select?: number;

      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetHostRecordsResponse = {
    body: AcHostRecord;
  };

  type ListPumpsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        producer?: string;
        model?: string;
        ns?: string;
      };
    };
  };

  type ListPumpsResponse = {
    body: Array<AcPump>;
    headers: {
      xTotalCount: number;
    };
  };

  type CreatePumpRequest = {
    body: AcPump;
  };

  type CreatePumpResponse = {
    body: AcPump;
  };

  type GetPumpRequest = {
    pumpId: string;
  };

  type GetPumpResponse = {
    body: AcPump;
  };

  type UpdatePumpRequest = {
    pumpId: string;
    body: AcPump;
  };

  type UpdatePumpResponse = {
    body: AcPump;
  };

  type DeletePumpRequest = {
    pumpId: string;
  };

  type GetPumpSnapshotRequest = {
    pumpId: string;
  };

  type GetPumpSnapshotResponse = {
    body: AcPumpSnapshot;
  };

  type GetPumpRecordsRequest = {
    pumpId: string;

    query: {
      limit?: number;
      offset?: number;
      select?: number;

      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetPumpRecordsResponse = {
    body: AcPumpRecord;
  };

  type ListTowersRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        producer?: string;
        model?: string;
        ns?: string;
      };
    };
  };

  type ListTowersResponse = {
    body: Array<AcTower>;
    headers: {
      xTotalCount: number;
    };
  };

  type CreateTowerRequest = {
    body: AcTower;
  };

  type CreateTowerResponse = {
    body: AcTower;
  };

  type GetTowerRequest = {
    towerId: string;
  };

  type GetTowerResponse = {
    body: AcTower;
  };

  type UpdateTowerRequest = {
    towerId: string;
    body: AcTower;
  };

  type UpdateTowerResponse = {
    body: AcTower;
  };

  type DeleteTowerRequest = {
    towerId: string;
  };

  type GetTowerSnapshotRequest = {
    towerId: string;
  };

  type GetTowerSnapshotResponse = {
    body: AcTowerSnapshot;
  };

  type GetTowerRecordsRequest = {
    towerId: string;

    query: {
      limit?: number;
      offset?: number;
      select?: number;

      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetTowerRecordsResponse = {
    body: AcTowerRecord;
  };

  type GetStatisticsRequest = {
    query: {
      select?: number;

      filter: {
        brand?: string;
        target?: string;
        targetType?: string;
        producer?: string;
        model?: string;
        ns?: string;
      };
    };
  };

  type GetStatisticsResponse = {
    body: Statistics;
  };

  type ListPowerAggRequest = {
    query: {
      select?: number;
      group?: string;

      filter: {
        target?: string;
        targetType?: string;
        time: {
          $gt?: string;
          $lt?: string;
        };
        brand?: string;
        producer?: string;
        model?: string;
        ns?: string;
      };
    };
  };

  type ListPowerAggResponse = {
    body: Array<PowerAggregation>;
  };

  type ListStrategiesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        type?: string;
        target?: string;
        ns?: string;
      };
    };
  };

  type ListStrategiesResponse = {
    body: Array<Strategy>;
    headers: {
      xTotalCount: number;
    };
  };

  type CreateStrategyRequest = {
    body: Strategy;
  };

  type CreateStrategyResponse = {
    body: Strategy;
  };

  type GetStrategyRequest = {
    strategyId: string;
  };

  type GetStrategyResponse = {
    body: Strategy;
  };

  type UpdateStrategyRequest = {
    strategyId: string;
    body: Strategy;
  };

  type UpdateStrategyResponse = {
    body: Strategy;
  };

  type DeleteStrategyRequest = {
    strategyId: string;
  };

  type ListModelsResponse = {
    body: Array<string>;
  };

  type ListProducersResponse = {
    body: Array<Producer>;
  };

  type AcCluster = {
    id: string;
    createdAt: string;
    updatedAt: string;
    capacity: number;
    brands: string;
    mode: string;
    producer: string;
  };

  type AcClusterSnapshot = {
    id: string;
    updatedAt: string;
    open: boolean;
    load: number;
    mode: string;
    broken: boolean;
    remote: boolean;
    evaporatorWaterFlow: boolean;
    evaporatorInTemp: number;
    evaporatorOutTemp: number;
    refrigerationPumpOn: boolean;
  };

  type AcClusterRecord = {
    id: string;
    at: string;
    open: boolean;
    load: number;
    mode: string;
    broken: boolean;
    remote: boolean;
    evaporatorWaterFlow: boolean;
    evaporatorInTemp: number;
    evaporatorOutTemp: number;
    refrigerationPumpOn: boolean;
  };

  type AcHost = {
    id: string;
    createdAt: string;
    updatedAt: string;
    brands: string;
    ratedPower: number;
    ratedCapacity: number;
    mode: string;
    producer: string;
    position: string;
  };

  type AcHostSnapshot = {
    id: string;
    updatedAt: string;
    status: string;
    load: number;
    mode: string;
    broken: boolean;
    operationHours: number;
    power: number;
    energyToday: number;
    inTemp: number;
    outTemp: number;
    capacity: number;
  };

  type AcHostRecord = {
    id: string;
    at: string;
    status: string;
    load: number;
    mode: string;
    broken: boolean;
    operationHours: number;
    power: number;
    energyToday: number;
    inTemp: number;
    outTemp: number;
    capacity: number;
  };

  type AcPump = {
    id: string;
    createdAt: string;
    updatedAt: string;
    brands: string;
    ratedPower: number;
    ratedFlow: {
      min: number;
      max: number;
    };
    head: {
      min: number;
      max: number;
    };
    mode: string;
    producer: string;
    position: string;
  };

  type AcPumpSnapshot = {
    id: string;
    updatedAt: string;
    status: string;
    load: number;
    broken: boolean;
    operationHours: number;
    power: number;
    energyToday: number;
    pressure: number;
    traffic: number;
    recycles: Array<{
      type: string;
    }>;
  };

  type AcPumpRecord = {
    id: string;
    at: string;
    status: string;
    load: number;
    broken: boolean;
    operationHours: number;
    power: number;
    energyToday: number;
    pressure: number;
    traffic: number;
    recycles: Array<{
      type: string;
    }>;
  };

  type AcTower = {
    id: string;
    createdAt: string;
    updatedAt: string;
    brands: string;
    ratedPower: number;
    mode: string;
    producer: string;
    position: string;
  };

  type AcTowerSnapshot = {
    id: string;
    updatedAt: string;
    status: string;
    load: number;
    broken: boolean;
    operationHours: number;
    power: number;
    energyToday: number;
    inTemp: number;
    outTemp: number;
  };

  type AcTowerRecord = {
    id: string;
    at: string;
    status: string;
    load: number;
    broken: boolean;
    operationHours: number;
    power: number;
    energyToday: number;
    inTemp: number;
    outTemp: number;
  };

  type Statistics = {
    totalCapacity: number;
    feeLastMonth: number;
    feeThisMonth: number;
    load: number;
    loadToday: {
      min: number;
      max: number;
    };
    energyThisMonth: {
      valley: number;
      normal: number;
      peak: number;
      sharp: number;
    };
    energyLastMonth: {
      valley: number;
      normal: number;
      peak: number;
      sharp: number;
    };
  };

  type EnergyStructure = {
    valley: number;
    normal: number;
    peak: number;
    sharp: number;
  };

  type Producer = {
    name: string;
    models: string;
  };

  type Range = {
    min: number;
    max: number;
  };

  type RecycledWater = {
    type: string;
  };

  type Strategy = {
    target: string;
    content: string;
    start: string;
    end: string;
  };

  type PowerAggregation = {
    fee: number;
    energy: number;
    load: number;
    time: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    target: string;
    targetType: string;
    brands: string;
    model: string;
    producer: string;
  };

  type Err = {
    code: string;
    message: string;
  };
}
