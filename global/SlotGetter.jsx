const timeSlots = [
  { key: 1, time: "6:00", status: "OK" },
  { key: 2, time: "6:20", status: "OK" },
  { key: 3, time: "6:40", status: "OK" },

  { key: 4, time: "7:00", status: "N/A" },
  { key: 5, time: "7:20", status: "N/A" },
  { key: 6, time: "7:40", status: "N/A" },

  { key: 7, time: "8:00", status: "N/A" },
  { key: 8, time: "8:20", status: "N/A" },
  { key: 9, time: "8:40", status: "N/A" },

  { key: 10, time: "9:00", status: "N/A" },
  { key: 11, time: "9:20", status: "OK" },
  { key: 12, time: "9:40", status: "OK" },

  { key: 13, time: "10:00", status: "OK" },
  { key: 14, time: "10:20", status: "OK" },
  { key: 15, time: "10:40", status: "OK" },

  { key: 16, time: "11:00", status: "N/A" },
  { key: 17, time: "11:20", status: "N/A" },
  { key: 18, time: "11:40", status: "OK" },

  { key: 19, time: "13:00", status: "OK" },
  { key: 20, time: "13:20", status: "N/A" },
  { key: 21, time: "13:40", status: "N/A" },

  { key: 22, time: "14:00", status: "N/A" },
  { key: 23, time: "14:20", status: "OK" },
  { key: 24, time: "14:40", status: "OK" },

  { key: 25, time: "15:00", status: "N/A" },
  { key: 26, time: "15:20", status: "OK" },
  { key: 27, time: "15:40", status: "OK" },

  { key: 28, time: "16:00", status: "OK" },
  { key: 29, time: "16:20", status: "OK" },
  { key: 30, time: "16:40", status: "OK" },

  ,
  { key: 31, time: "17:00", status: "OK" },
  { key: 32, time: "17:20", status: "OK" },
  { key: 33, time: "17:40", status: "OK" },

  ,
  { key: 34, time: "18:00", status: "OK" },
  { key: 35, time: "18:20", status: "OK" },
  { key: 36, time: "18:40", status: "OK" },

  ,
  { key: 37, time: "19:00", status: "OK" },
  { key: 38, time: "19:20", status: "OK" },
  { key: 39, time: "19:40", status: "OK" },

  ,
  { key: 40, time: "20:00", status: "OK" },
  { key: 41, time: "20:20", status: "OK" },
  { key: 42, time: "20:40", status: "OK" },

  ,
  { key: 43, time: "21:00", status: "OK" },
  { key: 44, time: "21:20", status: "OK" },
  { key: 45, time: "21:40", status: "OK" },

  ,
  { key: 46, time: "22:00", status: "OK" },
  { key: 47, time: "22:20", status: "OK" },
  { key: 48, time: "22:40", status: "OK" },

  { key: 49, time: "23:00", status: "OK" },
  { key: 50, time: "23:20", status: "OK" },
  { key: 51, time: "23:40", status: "OK" },
];

export const getSlot = (index) => {
  return timeSlots.filter((slot) => slot.key === index);
};
