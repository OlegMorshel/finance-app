import classNames from 'classnames/bind'
import React from 'react'
import Chart from '../../Chart/Chart'
import UsualSection from '../../UsualSection/UsualSection'
import styles from './Dashboard.module.scss'
const cnb = classNames.bind(styles)
interface Props {}
const Dashboard: React.FC<Props> = () => {
	return (
		<div className={cnb('dashboardLayout')}>
			<div className={cnb('contentBlock')}>
				<UsualSection title='Доходы' subtitle='Все доходы'>
					<div className={cnb('chartContainer')}><Chart /></div>
				</UsualSection>
			</div>
		</div>
	)
}
export default Dashboard
