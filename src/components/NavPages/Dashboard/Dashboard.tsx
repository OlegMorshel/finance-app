import classNames from 'classnames/bind'
import React from 'react'
import Chart from '../../Chart/Chart'
import PieRechartComponent from '../../PieRechartComponent/PieRechartComponent'
import CashFlowObserver from '../../UsualSection/components/CashFlowObserver/CashFlowObserver'
import UsualSection from '../../UsualSection/UsualSection'
import styles from './Dashboard.module.scss'
const cnb = classNames.bind(styles)
interface Props {}
const Dashboard: React.FC<Props> = () => {
	return (
		<div className={cnb('dashboardLayout')}>
			<div className={cnb('contentBlock')}>
				<UsualSection title='Доходы и расходы' subtitle='ОТКРЫТЬ ГРАФИК'>
					{/* <Chart /> */}
					<CashFlowObserver />
				</UsualSection>
				<UsualSection title='КЭШ' subtitle='ОТКРЫТЬ ДЕТАЛИ'>
					<Chart />
				</UsualSection>
				<UsualSection title='Структура доходов' subtitle='ВСЕ ДОХОДЫ'>
					<PieRechartComponent />
				</UsualSection>
			</div>
		</div>
	)
}
export default Dashboard
