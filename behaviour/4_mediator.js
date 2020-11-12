class User {
	constructor(name) {
		this.name = name;
		this.room = null;
	}

	send(message, to) {
		this.room.send(message, this, to);
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`);
	}
}

class ChatRoom {
	constructor() {
		this.users = {};
	}

	register(user) {
		this.users[user.name] = user;
		user.room = this;
	}

	send(message, from, to) {
		if (to) {
			to.receive(message, from);
		} else {
			Object.keys(this.users).forEach((key) => {
				if (this.users[key] === from) return;

				this.users[key].receive(message, from);
			});
		}
	}
}

const alex = new User('Alex');
const john = new User('John');
const kate = new User('Kate');

const room = new ChatRoom();
room.register(alex);
room.register(john);
room.register(kate);
console.log(room.users);

alex.send('hello', john);
john.send('hello alex', alex);
kate.send('hello everyone');
