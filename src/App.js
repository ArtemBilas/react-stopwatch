import React, { useState, useRef } from 'react';
import styles from './App.module.css';

import formatTime from './utils';
import Layout from './components/Layout/Layout';
import Stopwatch from './components/Stopwatch/Stopwatch';
import BtnContainer from './components/BtnContainer/BtnContainer';

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
    if(titleToggle === 'Start/Stop'){
      return;
    }
    return millisecondsRef.current = new Date();
  }

  const onWait = () => {
    if(titleToggle === 'Start/Stop'){
      return;
    }

    const toMili = millisecondsRef.current.getMilliseconds();
    
    if (toMili < 300) {
      clearInterval(countRef.current);
      onPause();

      setIsStart(true);
      setBtnToggle('Start');
    } else {
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
      <section className={styles.App}>
        <h2 className={styles.Title}>Stopwatch</h2>
        <Stopwatch
          timer={timer}
          formatTime={formatTime}
        />

        <BtnContainer
          handleToggle={handleToggle}
          onWait={onWait}
          onCoundown={onCoundown}
          titleToggle={titleToggle}
        />
      </section>
    </Layout>
  );
}

export default App;
