import React, { useState, useEffect, useRef, useCallback } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

function RobotList() {
	var [robots, setRobots] = useState([]);
	var store = useRef(null);

	const onAdd = useCallback((name, type, mass) => {
		store.current.addRobot({
			type: type,
			name: name,
			mass: mass
		});
	}, []);

	useEffect(function insideEffect() {
		store.current = new RobotStore();
		setRobots(store.current.getRobots());

		store.current.emitter.addListener("UPDATE", function listenToEvent() {
			var robots = [];
			store.current.robots.forEach(robot => {
				robots.push(robot);
			});
			setRobots(robots);
		});

		return function cleanUp() {
			store.current.emitter.removeAllListeners("UPDATE");
		}

	}, []);


	return (
		<div>
			{
				robots.map((robot, i) => <Robot item={robot} key={i} />)
			}

			<RobotForm onAdd={onAdd} />
		</div>
	);

}

export default RobotList
