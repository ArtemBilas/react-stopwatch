import React from 'react';
import styles from './Stopwatch.module.css';

const Stopwatch = (props) => {
  const {formatTime, timer} = props;
  return(
    <section className={styles.Stopwatch}>
      <p>{formatTime(timer)}</p>
    </section>
  );
}

export default Stopwatch;