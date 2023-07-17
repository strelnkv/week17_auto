const carsDiv = document.querySelector(".car");
const bikeDiv = document.querySelector(".bike");

class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    //основной див для транспорта
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");

    //параграф для бренда
    const brandP = document.createElement("p");
    brandP.classList.add("brandP");
    mainDiv.appendChild(brandP);

    //вставляем в параграфы бренд
    brandP.textContent = `Brand: ${this.brand}`;

    //вставляем цену в див
    mainDiv.appendChild(this.getPrice());

    return mainDiv;
  }
  getPrice() {
    //параграф для цены
    const priceP = document.createElement("p");
    priceP.classList.add("priceP");

    //вставляем в параграфы цену
    priceP.textContent = `Price: ${this.price} ₽`;

    return priceP;
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, brand, price);
    this.doors = doors;
  }
  getDoorsCount() {
    const doorsP = document.createElement("p");
    doorsP.classList.add("doorsP");
    doorsP.textContent = `Doors count: ${this.doors}`;
    return doorsP;
  }
}

class Bike extends Transport {
  constructor(type, brand, speed, price) {
    super(type, price, brand);
    this.speed = speed;
  }
  getMaxSpeed() {
    const speedP = document.createElement("p");
    speedP.classList.add("speedP");
    speedP.textContent = `Max speed: ${this.speed} km/h`;
    return speedP;
  }
}

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

data.forEach((el) => {
  debugger;
  if (el.type === "car") {
    let car = new Car(el.type, el.brand, el.price, el.doors);

    carsDiv.appendChild(car.getInfo());
    carsDiv.appendChild(car.getDoorsCount());
  }
  if (el.type === "bike") {
    let bike = new Bike(el.type, el.brand, el.maxSpeed, el.price);

    bikeDiv.appendChild(bike.getInfo());
    bikeDiv.appendChild(bike.getMaxSpeed());
  }
});
