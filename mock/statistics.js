const faker = require("faker");
const _ = require("lodash");

const generator = ({ count = 100 }) => {
  return _.range(count).map(i => {
    return {
      totalCapacity: 2419,
      feeLastMonth: 27090,
      feeThisMonth: 25705,
      load: 427.2,
      loadToday: {
        max: 729.6,
        min: 30.8,
      },
      id: faker.random.uuid(),
    };
  });
};

module.exports = generator;
