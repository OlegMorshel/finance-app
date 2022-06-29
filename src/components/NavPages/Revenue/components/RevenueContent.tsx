import classNames from 'classnames/bind'
import React from 'react'
import PieRechartComponent from '../../../PieRechartComponent/PieRechartComponent'
import styles from './RevenueContent.module.scss'
const cnb = classNames.bind(styles)

interface Props {}
const RevenueContent: React.FC<Props> = () => {
	return (
		<>
			<PieRechartComponent />
		</>
	)
}
export default RevenueContent
