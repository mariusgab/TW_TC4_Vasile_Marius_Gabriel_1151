import React, { useState, useEffect, useRef } from 'react'
import Robot from './Robot'

function RobotForm(props) {
    const { onAdd } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [mass, setMass] = useState("");

    return (
        <form>
            <label>
                Name:
                <input type="text" id='name' value={name} onChange={(event) => {
                    setName(event.target.value);
                }} />
            </label>
            <label>
                Type:
                <input type="text" id='type' value={type} onChange={(event) => {
                    setType(event.target.value);
                }} />
            </label>
            <label>
                Mass:
                <input type="text" id='mass' value={mass} onChange={(event) => {
                    setMass(event.target.value);
                }} />
            </label>

            <input type="button" value="add" onClick={() => {
                onAdd({
                    type: type,
                    name: name,
                    mass: mass
                });
            }} />

        </form >


    );
}

export default RobotForm