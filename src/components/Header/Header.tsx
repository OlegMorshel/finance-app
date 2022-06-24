import classNames from 'classnames/bind';
import React from 'react';
import Picture from '../Picture/Picture';
import styles from './Header.module.scss';
const cnb = classNames.bind(styles)
const Header = () => {
  return (
    <div className={cnb("headerWrapper")}>
      <Picture
        alt="profile"
        src={'https://i.pinimg.com/originals/fe/a5/6e/fea56edde1aa7e4d8874a03cd1a95bd6.jpg'}
        height={60}
        width={60}
        className={cnb("profileImage")}
      />
      <h2>Иван Петров</h2>
    </div>
  );
};

export default Header;
