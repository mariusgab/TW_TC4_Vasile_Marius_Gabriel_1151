import React, { useState, useEffect, useRef } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

function RobotList() {
	var [robots, setRobots] = useState([]);
	var store = useRef(null);

	useEffect(function insideEffect() {
		store = new RobotStore();
		setRobots(store.getRobots());

		store.emitter.addListener("UPDATE", function listenToEvent() {
			setRobots(store.getRobots());
		});

		return function cleanUp() {
			store.emitter.removeAllListeners("UPDATE");
		}

	}, [])

	return (
		<div>

			{
				robots.map((e, i) =>
					<Robot item={e} key={i} />
				)
			}
		</div>
	)
}

export default RobotList
