import React from 'react'
import classNames from 'classnames/bind'
import styles from './Revenue.module.scss'
import RevenueContent from './components/RevenueContent'
const cnb = classNames.bind(styles)
interface Props {}
const Revenue: React.FC<Props> = () => {
	return <div className={cnb('revenueLayout')}>
		<RevenueContent />
		<div>Пользователь</div>
	</div>
}
export default Revenue
