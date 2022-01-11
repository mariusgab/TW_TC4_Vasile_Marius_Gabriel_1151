import React, { useState, useEffect, useRef } from 'react'
import Robot from './Robot'

function RobotForm(props) {
    const { onAdd } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [mass, setMass] = useState("");
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onAdd(name, type, mass);
        }}>
            <label>
                Name:
                <input type="text" name="name" id='name' value={name} onChange={(event) => {
                    setName(event.target.value);
                }} />
            </label>
            <label>
                Type:
                <input type="text" name="type" id='type' value={type} onChange={(event) => {
                    setType(event.target.value);
                }} />
            </label>
            <label>
                Mass:
                <input type="text" name="mass" id='mass' value={mass} onChange={(event) => {
                    setMass(event.target.value);
                }} />
            </label>

            <input type="submit" value="add" />

        </form >


    );
}

export default RobotForm