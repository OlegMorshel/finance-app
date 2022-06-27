import classNames from 'classnames/bind'
import React from 'react'
import styles from './CashFlowObserver.module.scss'
import CashFlowSection from './components/CashFlowSection/CashFlowSection'
const cnb = classNames.bind(styles)
interface Props {}
const CashFlowObserver: React.FC<Props> = () => {
	return (
		<div>
			<div className={cnb('headerSection')}>
				<CashFlowSection title={'Прибыль'} subtitle={'+581 677 ₽'} />
				<CashFlowSection title={'Вывод денег'} subtitle={'350 000 ₽'} />
			</div>
		</div>
	)
}
export default CashFlowObserver
