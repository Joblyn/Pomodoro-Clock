import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const SessionLength = ({ sessionLength, decreaseSessionLength, increaseSessionLength, isPlay }) => {
  const increaseSession = ()=>{
    if(sessionLength === 60){
      return
    } 
    increaseSessionLength()
  }

  const decreaseSession = ()=>{
    if(sessionLength === 1){
      return
    } 
    decreaseSessionLength()
  }
  return (
    <section>
      <h4 id="session-label">Session Length</h4>
      <section className="interval-container">
        <button disabled={isPlay ? 'disabled' : ''}  id="session-decrement" onClick={decreaseSession}><FontAwesomeIcon className="icon" icon={faArrowDown}/></button>
        <p id="session-length" className="interval-length">{sessionLength}</p>
        <button disabled={isPlay ? 'disabled' : ''}  id="session-increment" onClick={increaseSession}><FontAwesomeIcon className="icon" icon={faArrowUp}/></button> 
      </section>
    </section>
  )
}

export default SessionLength;