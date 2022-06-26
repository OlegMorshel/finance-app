import classNames from 'classnames/bind'
import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import styles from './Layout.module.scss'
import {selectNavItem} from './components/LayoutUtils'
import RoutesContentWrapper from '../Content/RoutesContentWrapper'
const cnb = classNames.bind(styles)
const Layout: React.FC = () => {
	return (
		<div className={cnb('container')}>
			<div className={cnb('layout')}>
				<Header />
				<NavBar selectNavItem={selectNavItem} />
				<RoutesContentWrapper />
			</div>
		</div>
	)
}

export default Layout
