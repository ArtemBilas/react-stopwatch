import React from 'react';
import './BtnContainer.css';

const BtnContainer = (props) => {
  const {
    titleToggle,
    handleToggle,
    onCoundown,
    onWait
  } = props;

  const classes = [];

  if (titleToggle === 'Start') {
    classes.push('Start');
  }else if ( titleToggle === 'Stop'){
    classes.push('Stop');
  }else{
    classes.push('Init');
  }

  return (
    <section className='BtnContainer'>
      <button
        className={classes}
        onClick={() => handleToggle()}
      >
        {titleToggle}
      </button>
      <button
        className='Wait'
        onClick={() => onCoundown()}
        onDoubleClick={() => onWait()}
      >Wait</button>
    </section>
  );
}

export default BtnContainer;
