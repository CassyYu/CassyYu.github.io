import React, { Component } from 'react'
import './index.css'

const TIMER_INTERVAL = 200;

export default class Right extends Component {

  state = {
    timerId: null,
    currentChoosenId: this.props.currentChoosenID
  }

  handleClickStart = () => {
    const { choices } = this.props;
    const { length } = choices;
    if (this.state.timerId !== null) return;
    if (length === 0) {
      alert('无选项');
      return;
    }
    let t = 0;
    const timerId = setInterval(() => {
      this.setState({ currentChoosenId: t++ % choices.length });
    }, TIMER_INTERVAL);
    this.setState({ timerId });
  }

  handleClickStop = () => {
    clearInterval(this.state.timerId);
    this.setState({ timerId: null });
  }

  renderCurrent() {
    const { choices, currentChoosenID } = this.props;
    const { currentChoosenId } = this.state;
    console.log('id:' + currentChoosenId)
    if (choices.length === 0 || currentChoosenId === -1) {
      return (
        <div className="final-choice" style={{ backgroundColor: '#ddd' }}>
          <div className="final-choice-text">{'点击Start开始'}</div>
        </div>);
    }
    const { text, color } = choices[currentChoosenId];
    return (
      <div className="final-choice" style={{ backgroundColor: color }}>
        {<div className="final-choice-text">{text}</div>}
      </div>);
  }

  render() {
    console.log('renderRight');
    return (
      <div className="right">
        <h2 className="right-header">Your Final Choice</h2>
        <div className="button-container">
          <button className="start" onClick={this.handleClickStart}>Start</button>
          <br /><br />
          <button className="stop" onClick={this.handleClickStop}>Stop</button>
        </div>
        {this.renderCurrent()}
      </div>
    )
  }
}
