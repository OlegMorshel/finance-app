import classNames from 'classnames/bind'
import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import styles from './Layout.module.scss'
const cnb = classNames.bind(styles)
const Layout: React.FC = () => {
	return (
		<div className={cnb('container')}>
			<div className={cnb('layout')}>
				<Header />
				<NavBar />
			</div>
		</div>
	)
}

export default Layout
