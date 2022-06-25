import classNames from 'classnames/bind'
import React from 'react'
import {DashboardSvg} from '../../../../assets/Icons'
import {NavBarItemType} from '../../../../localDB/localDB'
import {NavBarSize} from '../../NavBar'
import styles from './NavItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	mode?: NavBarSize
	item: NavBarItemType
}
const NavItem: React.FC<Props> = ({mode = NavBarSize.LARGE, item}) => {
	const {icon, name} = item
	return (
		<div className={cnb('navItemWrapper')}>
			<div className={cnb('navIcon')}>{icon}</div>
			{mode === NavBarSize.LARGE && <p className={cnb('fieldName')}>{name}</p>}
		</div>
	)
}

export default NavItem
