import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入内容不能为空')
      target.value = ''
      return
    }
    this.props.addTodo(target.value)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
