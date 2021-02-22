import React from 'react';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <section className={styles.Layout}>
      <main className={styles.Main}>
        {props.children}
      </main>
    </section>
  );
}

export default Layout;
