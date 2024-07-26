export const CarsService = {
  getCarsData() {
    return [
      {
        id: 1,
        name: "Honda Brio",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "honda brio.png",
      },
      {
        id: 2,
        name: "daihatsu xenia",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "daihatsu xenia.png",
      },
      {
        id: 3,
        name: "toyota avanza",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "toyota avanza.png",
      },
      {
        id: 4,
        name: "innova reborn",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "innova reborn.png",
      },
      {
        id: 5,
        name: "innova zenix",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "innova zenix.png",
      },
      {
        id: 6,
        name: "fortuner vrz",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "fortuner vrz.png",
      },
      {
        id: 7,
        name: "toyota hiace",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "toyota hiace.png",
      },
      {
        id: 8,
        name: "toyota hilux",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "toyota hilux.png",
      },
      {
        id: 9,
        name: "pick up",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "pickup.png",
      },
      {
        id: 10,
        name: "toyota rush",
        cityCar: "500.000",
        selfDrive: "250.000",
        image: "toyota rush.png",
      },
    ];
  },
  getCars() {
    return Promise.resolve(this.getCarsData());
  },
};
