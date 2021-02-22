import React from 'react';
import './Button.module.css';

const Button = (props) => {
  const { title, events, classes} = props;
  const style = ['Button'];

  if(classes){
    style.push(classes);
  }


  return (
    <button
      className={style.join(' ')}
      onClick={() => events()}
    >
      {title}
    </button>
  );
}

export default Button;