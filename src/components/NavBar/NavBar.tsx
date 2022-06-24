import classNames from 'classnames/bind';
import React from 'react';
import Picture from '../Picture/Picture';
import NavItem from './components/NavItem/NavItem';
import styles from './NavBar.module.scss';
const cnb = classNames.bind(styles);
export enum NavBarSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}
const NavBar: React.FC = () => {
  return (
    <div className={cnb("navBarWrapper")}>
      <Picture
        alt="profile"
        className={cnb('profileImage')}
        height={140}
        width={140}
        src={'https://i.pinimg.com/originals/fe/a5/6e/fea56edde1aa7e4d8874a03cd1a95bd6.jpg'}
      />
      <NavItem />
    </div>
  );
};

export default NavBar;
