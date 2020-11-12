class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	getResponsibilities() {}

	work() {
		return `${this.name} doing ${this.getResponsibilities()}`;
	}

	getPaid() {
		return `${this.name} has salary ${this.salary}`;
	}
}

class Developer extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	getResponsibilities() {
		return 'create programs';
	}
}

class QA extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	getResponsibilities() {
		return 'test programs';
	}
}

const dev = new Developer('Alex', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const qa = new QA('John', 110000);
console.log(qa.getPaid());
console.log(qa.work());
