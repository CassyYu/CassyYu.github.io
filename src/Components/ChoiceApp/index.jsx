import React, { Component } from 'react'
import Left from '../Left'
import Right from '../Right'
import './index.css'

export default class ChoiceApp extends Component {

  state = {
    choices: [
    ]
  }

  addChoice = (value) => {
    const characters = "0123456789abcdefg"
    const a = characters[Date.now() % 16]
    const b = characters[Date.now() % 13]
    const c = characters[Date.now() % 10]
    const color = '#' + a + b + c
    const newChoice = { id: Date.now(), value: value, color: color }
    this.setState(({ choices }) => ({ choices: [...choices, newChoice] }))
  }

  clearAll = () => {
    if (this.state.choices.length !== 0) {
      if (window.confirm('确定全部清楚吗？')) {
        this.setState({ choices: [] })
      }
    } else {
      alert('无选项')
    }
  }

  render() {
    const { choices } = this.state
    return (
      < div className="container" >
        <h1>Get Your Choice</h1>
        <Left choices={choices} addChoice={this.addChoice} clearAll={this.clearAll} />
        <Right choices={choices} />
      </div >
    )
  }
}
