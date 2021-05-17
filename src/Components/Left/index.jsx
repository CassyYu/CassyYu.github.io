import React, { Component } from 'react'
import './index.css'

export default class Left extends Component {

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入内容不能为空')
      target.value = ''
      return
    }
    this.props.addChoice(target.value)
    target.value = ''
  }

  render() {
    const { choices, clearAll } = this.props
    return (
      <div className="left">
        <h2>Write Down Choices</h2>
        <input className="input" type="text" placeholder="Please input your choice" onKeyUp={this.handleKeyUp} />
        <ul className="list">
          {
            choices.map(choice => {
              return <li key={choice.id} style={{ backgroundColor: choice.color }}>&nbsp;{choice.value}</li>
            })
          }
        </ul>
        <button onClick={clearAll}>Clear</button>
      </div>
    )
  }
}
