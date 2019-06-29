const faker = require("faker");
const _ = require("lodash");

const generator = () => {
  return [
    {
      id: 1,
      name: "1#冷机",
      data: [
        {
          start: "06: 00",
          end: "10: 00",
          left: "25%",
          width: "15%",
          color: "#fad337",
        },
        {
          start: "14: 00",
          end: "18: 00",
          left: "55%",
          width: "15%",
          color: "#fcb96e",
        },
      ],
    },
    {
      id: 2,
      name: "2#冷机",
      data: [
        {
          start: "12: 00",
          end: "18: 00",
          left: "50%",
          width: "25%",
          color: "#ff1712",
        },
      ],
    },
    {
      id: 3,
      name: "1#冷水泵",
      data: [
        {
          start: "8: 00",
          end: "16: 00",
          left: "30%",
          width: "50%",
          color: "#fcb96e",
        },
      ],
    },
    {
      id: 4,
      name: "1#冷却塔",
      data: [
        {
          start: "8: 00",
          end: "16: 00",
          left: "10%",
          width: "25%",
          color: "#fcb96e",
        },
        {
          start: "8: 00",
          end: "16: 00",
          left: "60%",
          width: "20%",
          color: "#ff1712",
        },
      ],
    },
  ];
};

module.exports = generator;
