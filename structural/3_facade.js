class Complaints {
	constructor() {
		this.complains = [];
	}

	reply() {}

	add(complaint) {
		this.complains.push(complaint);
		return this.reply(complaint);
	}
}

class ProductComplaints extends Complaints {
	reply({ id, customer, details }) {
		return `Product: ${id}, ${customer}, ${details}`;
	}
}

class ServiceComplaints extends Complaints {
	reply({ id, customer, details }) {
		return `Service: ${id}, ${customer}, ${details}`;
	}
}

class ComplaintRegistry {
	register(customer, type, details) {
		const id = Date.now();
		const complaint = type === 'service' ? new ServiceComplaints() : new ProductComplaints();

		return complaint.add({ id, customer, details });
	}
}

const registry = new ComplaintRegistry();

const serviceComplaint = registry.register('Alex', 'service', 'service is not available');
console.log(serviceComplaint);

const productComplaint = registry.register('John', 'product', 'product not found');
console.log(productComplaint);
