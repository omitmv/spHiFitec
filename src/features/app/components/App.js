import React from 'react'

import { Menu } from '../../menu/Menu'

import logo from '../assets/logo.svg'
import './App.css'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    )
  }
}
