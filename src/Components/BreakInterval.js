import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const BreakInterval = ({ breakInterval, increaseBreakLength, decreaseBreakLength, isPlay }) => {

  const decreaseCounter = () => {
    if(breakInterval === 1){
      return;
    }
    decreaseBreakLength();
  }

  const increaseCounter = () => {
    if(breakInterval === 60){
      return;
    }
    increaseBreakLength();
  }

  return (
    <section >
      <h4 id="break-label">Break Length</h4>
      <section className="interval-container">
        <button disabled={isPlay ? 'disabled' : ''} id="break-decrement" onClick={decreaseCounter} ><FontAwesomeIcon className="icon" icon={faArrowDown}/></button>
        <p id="break-length" className="interval-length">{breakInterval}</p>
        <button disabled={isPlay ? 'disabled' : ''}  id="break-increment" onClick={increaseCounter}><FontAwesomeIcon className="icon" icon={faArrowUp}/></button> 
      </section>
    </section>
  )
} 

export default BreakInterval;