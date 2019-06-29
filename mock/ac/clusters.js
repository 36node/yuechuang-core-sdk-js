const faker = require("faker");
const _ = require("lodash");

const generator = () => {
  return [
    {
      id: "cluster1",
      updatedAt: faker.date.recent(),
      open: faker.random.boolean(),
      load: faker.random.number({ min: 0, max: 100 }),
      mode: faker.random.arrayElement(["COOL", "HEAT"]),
      broken: faker.random.boolean(),
      remote: faker.random.boolean(),
      evaporatorWaterFlow: faker.random.boolean(),
      evaporatorInTemp: faker.random.number({ min: 0, max: 100 }),
      evaporatorOutTemp: faker.random.number({ min: 0, max: 100 }),
      refrigerationPumpOn: faker.random.boolean(),
    },
  ];
};

module.exports = generator;
