import React, { useState, useEffect, useRef } from 'react'
import Robot from './Robot'

function RobotForm(props) {
    const { onAdd } = props;
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onAdd();
        }}>
            <label>
                Name:
                <input type="text" name="name" id='name' />
            </label>
            <label>
                Type:
                <input type="text" name="type" id='type' />
            </label>
            <label>
                Mass:
                <input type="text" name="mass" id='mass' />
            </label>

            <input type="submit" value="add" />

        </form >


    );
}

export default RobotForm