class Vehicle {
	getTravelTime() {
		return this.timeTravel;
	}
}

class Bus extends Vehicle {
	constructor() {
		super();
		this.timeTravel = 10;
	}
}

class Taxi extends Vehicle {
	constructor() {
		super();
		this.timeTravel = 6;
	}
}

class Car extends Vehicle {
	constructor() {
		super();
		this.timeTravel = 4;
	}
}

class Commute {
	travel(transport) {
		return transport.getTravelTime();
	}
}

const commute = new Commute();

console.log('car', commute.travel(new Car()));
console.log('texi', commute.travel(new Taxi()));
console.log('bus', commute.travel(new Bus()));
