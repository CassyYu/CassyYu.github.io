import React, { Component } from 'react'
import Content from '../Content'

export default class TabContents extends Component {
  render() {
    const { contents,currentIndex } = this.props
    return (
      <div className="tab-content">
        {
          contents.map((content, index) => {
            return <Content key={content} className={index === currentIndex ? "content show" : "content"} content={content} />
          })
        }
      </div>
      
    )
  }
}
