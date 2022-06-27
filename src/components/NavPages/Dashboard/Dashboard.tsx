import classNames from 'classnames/bind'
import React from 'react'
import Chart from '../../Chart/Chart'
import CashFlowObserver from '../../UsualSection/components/CashFlowObserver/CashFlowObserver'
import UsualSection from '../../UsualSection/UsualSection'
import styles from './Dashboard.module.scss'
const cnb = classNames.bind(styles)
interface Props {}
const Dashboard: React.FC<Props> = () => {
	return (
		<div className={cnb('dashboardLayout')}>
			<div className={cnb('contentBlock')}>
				<UsualSection title='Доходы и расходы' subtitle='Общий анализ'>
					{/* <Chart /> */}
					<CashFlowObserver />
				</UsualSection>
			</div>
		</div>
	)
}
export default Dashboard
