import React, { Component } from 'react'
import './index.css'

export default class Title extends Component {

  handleClickTitle = (title, titles) => {
    this.props.ClickTitle(title, titles)
  }

  render() {
    const { title, className, titles } = this.props
    return (
      <div onClick={() => { this.handleClickTitle(title, titles) }} className={className}>{title}</div>
    )
  }
}
