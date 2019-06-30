const faker = require("faker");
const moment = require("moment");

const generator = () => {
  const time = moment();
  const minute = time.minute();
  if (minute >= 30) {
    time.minute(30);
  } else {
    time.minute(0);
  }
  const tmp = [];
  do {
    tmp.push({
      time: time.format("YYYY-MM-DD HH:mm"),
      weather: faker.random.arrayElement(["晴", "多云", "雨", "雪"]),
      temperature: faker.random.number({ min: 20, max: 30 }),
      humidity: faker.random.number({ min: 70, max: 90 }),
      wind: faker.random.number({ min: 0, max: 5 }),
    });
    time.subtract(30, "minutes");
  } while (time.hour() > 0 || time.minute() > 0);

  return tmp;
};

module.exports = generator;
