import classNames from 'classnames/bind';
import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
const cnb = classNames.bind(styles);
const Layout = () => {
  return (
    <div className={cnb("container")}>
      <Header />
    </div>
  );
};

export default Layout;
