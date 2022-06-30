import classNames from 'classnames/bind'
import React from 'react'
import styles from './CashFlowObserver.module.scss'
import CashFlowSection from './components/CashFlowSection/CashFlowSection'
import CashRangeSection from './components/CashRangeSection/CashRangeSection'
const cnb = classNames.bind(styles)
interface Props {}
const CashFlowObserver: React.FC<Props> = () => {
	return (
		<div>
			<div className={cnb('headerSection')}>
				<CashFlowSection title={'Прибыль'} subtitle={'+581 677 ₽'} />
				<CashFlowSection title={'Вывод денег'} subtitle={'350 000 ₽'} />
			</div>
			<CashRangeSection type='earn' planValue={900245} realValue={1520322} title={'Доходы'} />
			<CashRangeSection type='spend' planValue={650456} realValue={450565} title={'Расходы'} />
		</div>
	)
}
export default CashFlowObserver
