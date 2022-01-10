import React, { Component } from 'react'

function Robot({ item }) {
  return (
    <div>
      Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
    </div>
  )
}

export default Robot
