class Light {
	constructor(light) {
		this.light = light;
	}
}

class RedLight extends Light {
	constructor() {
		super('red');
	}

	sign() {
		return 'stop';
	}
}

class YellowLight extends Light {
	constructor() {
		super('yellow');
	}

	sign() {
		return 'ready?';
	}
}

class GreenLight extends Light {
	constructor() {
		super('green');
	}

	sign() {
		return 'go';
	}
}

class TrafficLight {
	constructor() {
		this.states = [ new RedLight(), new YellowLight(), new GreenLight() ];
		this.current = this.states[0];
	}

	change() {
		const total = this.states.length;
		const index = this.states.findIndex((light) => light === this.current);
		this.current = index + 1 < total ? this.states[index + 1] : this.states[0];
	}

	sing() {
		return this.current.sign();
	}
}

const traffic = new TrafficLight();
console.log('state', traffic.sing());
traffic.sing();
traffic.change();
console.log('state', traffic.sing());
traffic.change();
console.log('state', traffic.sing());
traffic.change();
console.log('state', traffic.sing());
traffic.change();
console.log('state', traffic.sing());
