import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const Layout = ({children}) => {
  return (
    <section className={styles.Layout}>
      <main className={styles.Main}>
        {children}
      </main>
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout;
