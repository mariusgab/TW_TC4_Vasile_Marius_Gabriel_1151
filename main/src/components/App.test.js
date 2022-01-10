import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import RobotList from './RobotList'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})



