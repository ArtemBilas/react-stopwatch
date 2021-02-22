import React, { useState } from 'react';
import styles from './App.module.css';

import Button from './components/Button/Button';
import Layout from './components/Layout/Layout';
import Stopwatch from './components/Stopwatch/Stopwatch';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [btnToggle, setBtnToggle] = useState('Start/Pause');
  const [isStart, setIsStart] = useState(true);

  const btnTitleOnChange = () => {
    if (!isStart) {
      setIsStart(!isStart);
      setBtnToggle('Pause');
    } else {
      setIsStart(!isStart);
      setBtnToggle('Start');
    }
  }

  const btnOnWait = () => {
    setBtnToggle('Start/Pause');
  }

  return (
    <Layout>
      <section className={styles.App}>
        <Stopwatch
          seconds={seconds}
          minutes={minutes}
          hours={hours}
        />
        <section>
          <Button
            title={btnToggle}
            events={btnTitleOnChange}
            classes={btnToggle}
          />

          <Button
            title='Wait'
            events={btnOnWait}
            classes={btnToggle}
          />
        </section>
      </section>
    </Layout>
  );
}

export default App;
