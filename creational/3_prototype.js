const car = {
	wheels: 4,

	init() {
		console.log(`i has ${this.wheels} wheels, my owner is ${this.owner}`);
	},
};

const carWithOwner = Object.create(car, {
	owner: {
		value: 'Alex',
	},
});

console.log('is proto', carWithOwner.__proto__ === car);

carWithOwner.init();
