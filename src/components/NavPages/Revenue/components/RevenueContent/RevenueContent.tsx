import classNames from 'classnames/bind'
import {subDays} from 'date-fns'
import React from 'react'
import Chart, {ChartDataType} from '../../../../Chart/Chart'
import PieRechartComponent from '../../../../PieRechartComponent/PieRechartComponent'
import styles from './RevenueContent.module.scss'
const cnb = classNames.bind(styles)

interface Props {}
const RevenueContent: React.FC<Props> = () => {
	const data: ChartDataType[] = []
	for (let num = 30; num >= 0; num--) {
		data.push({
			date: subDays(new Date(), num).toISOString().substring(0, 10),
			value: 1 + Math.random(),
			value2: 1 - Math.random(),
			value3: 2 + Math.random(),
		})
	}
	const pieData = [
		{
			name: 'Chrome',
			value: 68.85,
		},
		{
			name: 'Firefox',
			value: 7.91,
		},
		{
			name: 'Edge',
			value: 6.85,
		},
		{
			name: 'Internet Explorer',
			value: 6.14,
		},
		{
			name: 'Others',
			value: 10.25,
		},
	]
	return (
		<div className={cnb('statisticWrapper')}>
			<PieRechartComponent list={pieData} />
			<Chart options={{colorFirstStatistic: '#33b95c', colorSecondStatistic: '#1da7e9', colorThirdStatistic: '#cc9a13'}} list={data} />
		</div>
	)
}
export default RevenueContent
