import React from 'react'
import classNames from 'classnames/bind'
import styles from './Revenue.module.scss'
import RevenueContent from './components/RevenueContent/RevenueContent'
import RevenueSettings from './components/RevenueSettings/RevenueSettings'
import Dropdown from '../../UI-KIT/Dropdown/Dropdown'
const cnb = classNames.bind(styles)
interface Props {}
const Revenue: React.FC<Props> = () => {
	return <div className={cnb('revenueLayout')}>
		<RevenueContent />
		<RevenueSettings />
		<div><Dropdown  /></div>
	</div>
}
export default Revenue
