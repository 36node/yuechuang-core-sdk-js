import SDK from "./index";

const sdk = new SDK({ base: "http://localhost:3000" });

describe("## SDK vehicle", () => {
  it("should list clusters", async () => {
    const result = await sdk.airConditioner.listClusters();

    expect(result.body.length).toBe(100);
  });

  it("should list hosts", async () => {
    const result = await sdk.airConditioner.listHosts();

    expect(result.body.length).toBe(100);
  });

  it("should list pumps", async () => {
    const result = await sdk.airConditioner.listPumps();

    expect(result.body.length).toBe(100);
  });

  it("should list towers", async () => {
    const result = await sdk.airConditioner.listTowers();

    expect(result.body.length).toBe(100);
  });

  it("should list strategies", async () => {
    const result = await sdk.operation.listStrategies();

    expect(result.body.length).toBe(100);
  });

  it("should list statistics ", async () => {
    const result = await sdk.report.getStatistics();

    expect(result.body.length).toBe(100);
  });

  it("should list power aggs", async () => {
    const result = await sdk.report.listPowerAgg();

    expect(result.body.length).toBe(100);
  });
});
