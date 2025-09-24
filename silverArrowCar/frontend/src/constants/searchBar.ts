const ORDER_OPTIONS = [
  {
    group: "Alphabetical",
    items: [
      { value: "name_asc", label: "A-Z" },
      { value: "name_desc", label: "Z-A" },
    ],
  },
  {
    group: "Date",
    items: [
      {
        value: "createdAt_desc",
        label: "Order by Date (newest)",
      },
      {
        value: "createdAt_asc",
        label: "Order by Date (oldest)",
      },
    ],
  },
];

export default ORDER_OPTIONS;
