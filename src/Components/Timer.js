import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';


class Timer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
      play: false
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  clickHandler() {
    this.setState({
      play: !this.state.play
    })
    !this.state.play ? this.play() : this.pause()
  }

  play() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.setState({ intervalId: intervalId })
  }
  decreaseTimer() {
    switch(this.state.timerSecond) {
      case 0:
        if(this.props.timerMinute === 0){
          if(this.state.isSession) {
            this.setState({
              isSession: false
            });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession : true
            });
            this.props.toggleInterval(this.state.isSession);
          }
        }
        this.props.updateTimerMinute();
        this.setState({
          timerSecond:59
        })
        break;
      default: 
        this.setState(prevState=>{
          return {
            timerSecond: prevState.timerSecond - 1
          }
        })
        break;
    }
  }

  pause() {
    clearInterval(this.state.intervalId)
  }

  reset() {
    this.pause();
    this.props.reset();
    this.setState({
      timerSecond: 0
    })
  }

  onPlayStopTimer() {
    
  }

  render() {
    const { timerMinute } = this.props;
    const { isSession, timerSecond, play } = this.state;
    return (
      <section>
        <section className="timer-container">
          <h4 id="timer-label">{isSession ? 'Session' : 'Break'}</h4>
          <div id="time-left">
            <span className="timer">{timerMinute}</span>
            <span className="timer">:</span>
            <span id="time-left" className="timer">{!timerSecond ? '00' : (
              timerSecond < 10 ? `0${timerSecond}` : timerSecond
            )}</span>
          </div>
        </section>
        <section className="timer-actions">
            <button id="start_stop" onClick={this.clickHandler}>{!play ? <FontAwesomeIcon className="icon" icon={faPlay}/> : <FontAwesomeIcon className="icon" icon={faPause}/>}</button>
            <button id="reset" onClick={this.reset}><FontAwesomeIcon className="icon" icon={faSyncAlt}/></button>
        </section>
      </section>
    )
  }
}

export default Timer;