import React, { Component } from 'react'
import './index.css'

export default class Content extends Component {
  render() {
    const { content, className } = this.props
    return (
      <div className={className}>{content}</div>
    )
  }
}


