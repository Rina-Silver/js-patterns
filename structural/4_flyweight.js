class Car {
	constructor(model, price) {
		this.model = model;
		this.price = price;
	}
}

class CarFactory {
	constructor() {
		this.cars = [];
	}

	create(model, price) {
		const candidate = this.getCar(model);
		if (candidate) return candidate;

		const newCar = new Car(model, price);
		this.cars.push(newCar);
		return newCar;
	}

	getCar(model) {
		return this.cars.find((car) => car.model === model);
	}
}

const bmw = new Car('bmw', 1000000);
const audi = new Car('bmw', 1500000);
const bmw2 = new Car('bmw', 1200000);
console.log('bmw', bmw);
console.log('audi', audi);
console.log('bmw2', bmw2);
console.log(bmw === bmw);
