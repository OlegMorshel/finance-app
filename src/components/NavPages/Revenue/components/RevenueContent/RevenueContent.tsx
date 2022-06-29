import classNames from 'classnames/bind'
import React from 'react'
import Chart from '../../../../Chart/Chart'
import PieRechartComponent from '../../../../PieRechartComponent/PieRechartComponent'
import styles from './RevenueContent.module.scss'
const cnb = classNames.bind(styles)

interface Props {}
const RevenueContent: React.FC<Props> = () => {
	return (
		<div className={cnb('statisticWrapper')}>
			<PieRechartComponent />
			<Chart />
		</div>
	)
}
export default RevenueContent
