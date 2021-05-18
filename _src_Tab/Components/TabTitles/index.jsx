import React, { Component } from 'react'
import Title from '../Title'

export default class Header extends Component {
  render() {
    const { titles, currentIndex, ClickTitle } = this.props
    return (
      <div className="tab-title">
        {
          titles.map((title, index) => {
            return <Title ClickTitle={ClickTitle} key={title} className={index === currentIndex ? "title underline" : "title"} title={title} titles={titles} />
          })
        }
      </div>
    )
  }
}


