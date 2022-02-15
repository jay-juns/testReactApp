import React from 'react';
import useCounterActions from '../../hooks/counter/useCounterActions';
import useCounter from '../../hooks/counter/useCounter';
import './styles.css';

const About = () => {
  const counterActions = useCounterActions();
  const count = useCounter().count;

  return(
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button className='about-btn' onClick={() => counterActions.onPlus({})}>PLUS</button>
      <button className='about-btn' onClick={() => counterActions.onMinus({})}>MINUS</button>
      <button className='about-btn' onClick={() => counterActions.onPlusRandom()}>PLUS RANDOM</button>
      <button className='about-btn' onClick={() => counterActions.onPlusAfterOneSeconds()}>PLUS AFTER ONE SECONDS</button>
      <button className='about-btn' onClick={() => counterActions.onMiusRandom()}>MINUS RANDOM</button>
    </div>
  )
}

export default About;