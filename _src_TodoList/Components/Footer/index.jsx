import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    const total = todos.length
    const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done === true ? 1 : 0) }, 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
