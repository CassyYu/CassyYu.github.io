import React, { Component } from 'react'
import TabTitles from './Components/TabTitles'
import TabContents from './Components/TabContents'

export default class App extends Component {

  state = {
    currentIndex: 0
  }

  ClickTitle = (currentTitle, titles) => {
    titles.forEach((title, index) => {
      if (title === currentTitle) this.setState({ currentIndex: index })
    })
  }

  render() {
    const { currentIndex } = this.state
    const contents = ["内容一", "内容二", "内容三", "内容四", "内容五"]
    const titles = ["周一", "周二", "周三", "周四", "周五"]
    return (
      <div className="tab-container">
        <TabTitles currentIndex={currentIndex} titles={titles} ClickTitle={this.ClickTitle} />
        <TabContents currentIndex={currentIndex} contents={contents} />
      </div>
    )
  }
}
