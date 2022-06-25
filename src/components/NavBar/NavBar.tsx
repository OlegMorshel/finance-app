import classNames from 'classnames/bind'
import React from 'react'
import {NavBarItems} from '../../localDB/localDB'
import Picture from '../Picture/Picture'
import NavItem from './components/NavItem/NavItem'
import styles from './NavBar.module.scss'
const cnb = classNames.bind(styles)
export enum NavBarSize {
	SMALL = 'SMALL',
	LARGE = 'LARGE',
}
const NavBar: React.FC = () => {
	const countTopSection = NavBarItems.length - 1
	const lastElementNumber = -1

	const lastNavItem = NavBarItems.slice(lastElementNumber)[0]

	return (
		<div className={cnb('navBarWrapper')}>
			<div className={cnb('navBarTopSection')}>
				{NavBarItems.slice(0, countTopSection).map((item) => (
					<NavItem item={item} key={item.id} />
				))}
			</div>
			<NavItem item={lastNavItem} key={lastNavItem.id ?? Symbol} />
		</div>
	)
}

export default NavBar
