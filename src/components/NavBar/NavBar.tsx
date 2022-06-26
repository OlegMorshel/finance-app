import classNames from 'classnames/bind'
import React from 'react'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import {NavBarItems, NavBarItemType} from '../../localDB/localDB'
import Picture from '../Picture/Picture'
import NavItem from './components/NavItem/NavItem'
import styles from './NavBar.module.scss'
const cnb = classNames.bind(styles)
export enum NavBarSize {
	SMALL = 'SMALL',
	LARGE = 'LARGE',
}

interface Props {
	selectNavItem: (item: NavBarItemType, navigate: NavigateFunction) => void
}
const NavBar: React.FC<Props> = ({selectNavItem}) => {
	const countTopSection = NavBarItems.length - 1
	const lastElementNumber = -1
	const navigate = useNavigate()
	const lastNavItem = NavBarItems.slice(lastElementNumber)[0]

	return (
		<div className={cnb('navBarWrapper')}>
			<div className={cnb('navBarTopSection')}>
				{NavBarItems.slice(0, countTopSection).map((item) => (
					<NavItem item={item} key={item.id} onClick={() => selectNavItem(item, navigate)} />
				))}
			</div>
			<NavItem item={lastNavItem} key={lastNavItem.id ?? Symbol} onClick={() => selectNavItem(lastNavItem, navigate)} />
		</div>
	)
}

export default NavBar
