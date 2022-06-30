import classNames from 'classnames/bind'
import {subDays} from 'date-fns'
import React from 'react'
import Chart, {ChartDataType} from '../../Chart/Chart'
import PieRechartComponent from '../../PieRechartComponent/PieRechartComponent'
import CashFlowObserver from '../../UsualSection/components/CashFlowObserver/CashFlowObserver'
import UsualSection from '../../UsualSection/UsualSection'
import styles from './Dashboard.module.scss'
const cnb = classNames.bind(styles)
interface Props {}
const Dashboard: React.FC<Props> = () => {
	const data: ChartDataType[] = []
	for (let num = 30; num >= 0; num--) {
		data.push({
			date: subDays(new Date(), num).toISOString().substring(0, 10),
			value: 1 + Math.random(),
			value2: 1 - Math.random(),
			value3: 2 + Math.random(),
		})
	}
	return (
		<div className={cnb('dashboardLayout')}>
			<UsualSection title='Доходы и расходы' subtitle='ОТКРЫТЬ ГРАФИК'>
				<CashFlowObserver />
			</UsualSection>
			<UsualSection title='КЭШ' subtitle='ОТКРЫТЬ ДЕТАЛИ'>
				<Chart options={{colorFirstStatistic: '#33b95c', colorSecondStatistic: '#1da7e9', colorThirdStatistic: '#cc9a13'}} list={data} />
			</UsualSection>
			<UsualSection title='Структура доходов' subtitle='ВСЕ ДОХОДЫ'>
				<PieRechartComponent list={[]} />
			</UsualSection>
			<UsualSection title='Структура расходов' subtitle='ВСЕ РАСХОДЫ'>
				<PieRechartComponent list={[]} />
			</UsualSection>
		</div>
	)
}
export default Dashboard
