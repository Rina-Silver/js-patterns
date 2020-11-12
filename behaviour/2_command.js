class MyMath {
	constructor(initValue = 0) {
		this.num = initValue;
	}

	square() {
		return this.num ** 2;
	}

	cube() {
		return this.num ** 3;
	}
}

class Command {
	constructor(subject) {
		this.subject = subject;
		this.commandsExecuted = [];
	}

	execute(command) {
		this.commandsExecuted.push(command);
		return this.subject[command]();
	}
}

const x = new Command(new MyMath(2));
console.log('xSquare 2', x.execute('square'));
console.log('xCube 2', x.execute('cube'));
console.log('commandsExecuted', x.commandsExecuted);
