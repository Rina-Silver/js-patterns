class MySum {
	constructor(initValue = 10) {
		this.sum = initValue;
	}

	add(value) {
		this.sum += value;
		return this;
	}
}
const sum = new MySum();
const addResult = sum.add(2).add(10).add(5);
console.log('result', addResult.sum);
