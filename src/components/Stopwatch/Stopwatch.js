import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stopwatch.module.css';

const Stopwatch = ({formatTime, timer}) => {
  return (
    <section className={styles.Stopwatch}>
      <p>{formatTime(timer)}</p>
    </section>
  );
}

Stopwatch.propTypes = {
  formatTime : PropTypes.func,
  timer : PropTypes.number
}

export default Stopwatch;