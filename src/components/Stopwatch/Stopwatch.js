import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stopwatch.module.css';

const Stopwatch = (props) => {
  const { formatTime, timer } = props;
  return (
    <section className={styles.Stopwatch}>
      <p>{formatTime(timer)}</p>
    </section>
  );
}

Stopwatch.propTypes = {
  props: PropTypes.string
}

export default Stopwatch;