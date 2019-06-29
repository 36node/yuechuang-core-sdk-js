const faker = require("faker");
const _ = require("lodash");

const generator = ({ count = 2 }) => {
  return _.range(count).map(i => {
    return {
      id: `host${i}`,
      createdAt: faker.date.past(), // 创建时间
      updatedAt: faker.date.past(), // 更新时间
      brands: faker.random.word(),
      mode: faker.random.word(),
      producer: "远大空调有限公司",
      position: "2楼设备平台",
      status: faker.random.arrayElement(["RUNNING", "STOP"]),
      ratedPower: faker.random.number({ min: 1000, max: 2000 }),
      ratedCapacity: faker.random.number({ min: 1000, max: 2000 }),
      capacity: faker.random.number({ min: 1000, max: 2000 }),
      count: faker.random.number({ min: 1000, max: 2000 }),
      operationHours: faker.random.number({ min: 100, max: 1000 }),
      power: faker.random.number({ min: 100, max: 1000 }),
      energyToday: faker.random.number({ min: 100, max: 1000 }),
      load: faker.random.number({ min: 1, max: 100 }),
      inTemp: faker.random.number({ min: 1, max: 100 }),
      outTemp: faker.random.number({ min: 1, max: 100 }),
      steamTemp: faker.random.number({ min: 1, max: 100 }),
      steamPress: faker.random.number({ min: 1, max: 100 }),
      codeTemp: faker.random.number({ min: 1, max: 100 }),
      codePress: faker.random.number({ min: 1, max: 100 }),
      oilPress: faker.random.number({ min: 1, max: 100 }),
      broken: faker.random.boolean(),
    };
  });
};

module.exports = generator;
