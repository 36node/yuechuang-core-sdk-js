const moment = require("moment");

const generator = () => {
  return [
    {
      id: 1,
      name: "1#冷机",
      date: moment().format("YYYY-MM-DD"),
      data: [
        {
          start: "06: 00",
          end: "10: 00",
          left: "25%",
          width: "15%",
          color: "#fad337",
          value: "3",
        },
        {
          start: "14: 00",
          end: "18: 00",
          left: "55%",
          width: "15%",
          color: "#fcb96e",
          value: "8",
        },
      ],
    },
    {
      id: 2,
      name: "2#冷机",
      date: moment().format("YYYY-MM-DD"),
      data: [
        {
          start: "12: 00",
          end: "18: 00",
          left: "50%",
          width: "25%",
          color: "#ff1712",
          value: "7",
        },
      ],
    },
    {
      id: 3,
      name: "1#冷水泵",
      date: moment().format("YYYY-MM-DD"),
      data: [
        {
          start: "8: 00",
          end: "16: 00",
          left: "30%",
          width: "50%",
          color: "#fcb96e",
          value: "5",
        },
      ],
    },
    {
      id: 4,
      name: "1#冷却塔",
      date: moment().format("YYYY-MM-DD"),
      data: [
        {
          start: "8: 00",
          end: "16: 00",
          left: "10%",
          width: "25%",
          color: "#fcb96e",
          value: "6",
        },
        {
          start: "8: 00",
          end: "16: 00",
          left: "60%",
          width: "20%",
          color: "#ff1712",
          value: "9",
        },
      ],
    },
    {
      id: 5,
      name: "3#冷却塔",
      date: moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD"),
      data: [
        {
          start: "8: 00",
          end: "16: 00",
          left: "10%",
          width: "25%",
          color: "#fcb96e",
          value: "6",
        },
        {
          start: "8: 00",
          end: "16: 00",
          left: "60%",
          width: "20%",
          color: "#ff1712",
          value: "9",
        },
      ],
    },
    {
      id: 6,
      name: "3#主机",
      date: moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD"),
      data: [
        {
          start: "9: 00",
          end: "12: 00",
          left: "15%",
          width: "25%",
          color: "#fcb96e",
          value: "6",
        },
      ],
    },
  ];
};

module.exports = generator;
