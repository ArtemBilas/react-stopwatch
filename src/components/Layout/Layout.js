import React from 'react';
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  props: PropTypes.element
}

export default Layout;
