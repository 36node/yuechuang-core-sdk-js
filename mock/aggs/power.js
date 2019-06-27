const faker = require("faker");
const _ = require("lodash");

const generator = ({ count = 100 }) => {
  return _.range(count).map(i => {
    return {
      id: faker.random.uuid(),
      createdAt: faker.date.past(), // 创建时间
      updatedAt: faker.date.past(), // 更新时间
    };
  });
};

module.exports = generator;
