import React from 'react';
import styles from './Stopwatch.module.css';

const Stopwatch = (props) => {
  const {minutes, seconds, hours} = props;
  return(
    <section className={styles.Stopwatch}>
      <span>{hours}&nbsp;:&nbsp;</span>
      <span>{minutes}&nbsp;:&nbsp;</span>
      <span>{seconds}</span>
    </section>
  );
}

export default Stopwatch;