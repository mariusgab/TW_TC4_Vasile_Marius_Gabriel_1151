import { EventEmitter } from 'fbemitter'

class RobotStore {
	constructor() {
		this.robots = [{
			id: 1,
			type: 'worker',
			name: 'tim',
			mass: 1000
		}, {
			id: 2,
			type: 'worker',
			name: 'tom',
			mass: 1500
		}];
		this.emitter = new EventEmitter();
	}
	addRobot(r) {
		let maxId = this.robots.reduce((a, e) => a.id > e.id ? a : e, (this.robots[0] || {}));
		r.id = maxId.id + 1;
		this.robots.push(r);
		this.emitter.emit('UPDATE');
	}
	getRobots() {
		return this.robots;
	}
}

export default RobotStore
