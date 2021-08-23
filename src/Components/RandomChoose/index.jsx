import React, { Component } from 'react'
import Left from '../Left'
import Right from '../Right'
import './index.css'

export default class RandomChoose extends Component {

  state = {
    choices: []
  }

  addChoice = (text) => {
    const characters = "0123456789abcdefg";
    const a = characters[parseInt(Math.random() * 100) % 16];
    const b = characters[parseInt(Math.random() * 100) % 16];
    const c = characters[parseInt(Math.random() * 100) % 16];
    const color = '#' + a + b + c;
    const newChoice = { id: Date.now(), text, color };
    this.setState(({ choices }) => ({ choices: [...choices, newChoice] }));
  }

  clearAll = () => {
    if (this.state.choices.length !== 0) {
      if (window.confirm('确定全部清楚吗？')) {
        this.setState({ choices: [] });
      }
    } else {
      alert('无选项');
    }
  }

  render() {
    const { choices } = this.state;
    return (
      <div className="container">
        <h1>Get Your Choice</h1>
        <Left choices={choices} addChoice={this.addChoice} clearAll={this.clearAll} />
        <Right choices={choices} />
      </div>
    )
  }
}
