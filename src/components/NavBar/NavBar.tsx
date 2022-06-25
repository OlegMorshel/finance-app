import classNames from 'classnames/bind'
import React from 'react'
import Picture from '../Picture/Picture'
import NavItem from './components/NavItem/NavItem'
import styles from './NavBar.module.scss'
const cnb = classNames.bind(styles)
export enum NavBarSize {
	SMALL = 'SMALL',
	LARGE = 'LARGE',
}
const NavBar: React.FC = () => {
	return (
		<div className={cnb('navBarWrapper')}>
			<Picture
				alt='profile'
				className={cnb('profileImage')}
				height={140}
				width={140}
				src={'https://kinkin.ch/app/uploads/2019/03/placeholder.jpg'}
			/>
			<NavItem />
		</div>
	)
}

export default NavBar
