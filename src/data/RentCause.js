export const Causes = {
  getCausesData() {
    return [
      {
        id: 1,
        title: "Competitive Kupang Car Rent Price",
        desc: "Rent a car in Kupang at affordable and competitive prices. Save money with hourly, daily, weekly or monthly rent options",
        icon: "serviceIcon.svg",
        bgIcon: "#5B72EE",
      },
      {
        id: 2,
        title: "Friendly Service",
        desc: "B'TA Car Rent Kupang always prioritizes friendly service for your comfort and smooth travel.",
        icon: "carIcon.svg",
        bgIcon: "#F48C06",
      },
      {
        id: 3,
        title: "Newest Car Fleet",
        desc: "B'TA Rent Car Kupang provides the latest fleet of cars with regular maintenance for the perfect travel experience.",
        icon: "moneyIcon.svg",
        bgIcon: "#29B9E7",
      },
      {
        id: 4,
        title: "Professional Driver",
        desc: "B'TA Rent Car Kupang's professional drivers, native to Kupang, are ready to take you with the best expertise and route knowledge.",
        icon: "driverIcon.svg",
        bgIcon: "#e9d5ff",
      },
      {
        id: 5,
        title: "Car Rent  self drive",
        desc: "Enjoy privacy and comfort with B'TA Rent Car Kupang's off-key car rental service. Terms and conditions apply.",
        icon: "keyIcon.svg",
        bgIcon: "#F48C06",
      },
      {
        id: 6,
        title: "Shuttle Service",
        desc: "Take advantage of B'TA Rent Car Kupang's shuttle service to/from the airport, terminal, hotels, and other locations in Kupang",
        icon: "betweenIcon.svg",
        bgIcon: "#5eead4",
      },
    ];
  },
  getCauses() {
    return Promise.resolve(this.getCausesData());
  },
};
