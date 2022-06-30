import classNames from 'classnames/bind'
import React from 'react'
import {ArrowDownSvg} from '../../assets/Icons'
import Picture from '../Picture/Picture'
import styles from './Header.module.scss'
const cnb = classNames.bind(styles)
const Header: React.FC = () => {
	return (
		<div className={cnb('headerWrapper')}>
			<Picture
				alt='profile'
				src={'https://kinkin.ch/app/uploads/2019/03/placeholder.jpg'}
				height={60}
				width={60}
				className={cnb('profileImage')}
			/>
			<h2>Иван Петров</h2>
			<div className={cnb('arrowWrapper')}>
				<ArrowDownSvg />
			</div>
		</div>
	)
}

export default Header
