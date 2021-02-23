import React, { useState, useRef } from 'react';
import styles from './App.module.css';

import formatTime from './utils';
import Layout from './components/Layout/Layout';
import Stopwatch from './components/Stopwatch/Stopwatch';

const App = () => {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);
  const millisecondsRef = useRef(null);

  const [titleToggle, setBtnToggle] = useState('Start/Stop');
  const [isStart, setIsStart] = useState(true);

  const onStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  const onPause = () => {
    clearInterval(countRef.current);
  }

  const onReset = () => {
    clearInterval(countRef.current);
    setTimer(0);

    setIsStart(true);
    setBtnToggle('Start/Stop');
  }

  const onCoundown = () => {
    return millisecondsRef.current = new Date();
  }

  const onWait = () => {
    const toMili = millisecondsRef.current.getMilliseconds();

    if (toMili > 300) {
      clearInterval(countRef.current);
      onPause();

      setIsStart(true);
      setBtnToggle('Start');
    } else {
      console.log('nothing');
      return;
    }
  }

  const handleToggle = () => {
    if (!isStart) {
      onReset()
      setIsStart(!isStart);
      setBtnToggle('Start/Stop');

    } else {
      onStart();
      setIsStart(!isStart);
      setBtnToggle('Stop');
    }
  }

  return (
    <Layout>
      <h2>Stopwatch</h2>
      <section className={styles.App}>
        <Stopwatch
          timer={timer}
          formatTime={formatTime}
        />

        <section>
          <button
            onClick={() => handleToggle()}
          >
            {titleToggle}
          </button>
          <button
            onClick={() => onCoundown()}
            onDoubleClick={() => onWait()}
          >Wait</button>
        </section>
      </section>
    </Layout>
  );
}

export default App;
