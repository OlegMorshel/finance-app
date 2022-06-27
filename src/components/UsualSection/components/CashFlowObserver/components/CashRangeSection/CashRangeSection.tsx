import classNames from 'classnames/bind'
import React from 'react'
import styles from './CashRangeSection.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	title: string
	realValue: number
	planValue: number
	height?: number
	type: 'earn' | 'spend'
}
const CashRangeSection: React.FC<Props> = ({planValue, realValue, title, height = 20, type}) => {
	return (
		<div className={cnb('rangeSectionWrapper')}>
			<p className={cnb('title')}>{title}</p>
			<div className={cnb('sectionLayout')}>
				<div className={cnb('ranges')}>
					<div
						className={cnb('actualRange', {greenColor: (type === 'earn'), redColor: (type === 'spend')})}
						style={{width: `${(realValue / Math.max(realValue, planValue)) * 100}%`, height: height}}
					/>
					<div
						className={cnb('planRange', {greenHiddenColor: (type === 'earn'), redHiddenColor: (type === 'spend')})}
						style={{width: `${(planValue / Math.max(realValue, planValue)) * 100}%`, height: height}}
					/>
				</div>
				<div className={cnb('amounts')}>
					<p className={cnb('realAmount')} style={{height: height}}>
						{type === 'spend' ? '-' : '+'}
						{realValue} ₽
					</p>
					<p className={cnb('planAmount')} style={{height: height}}>
						{type === 'spend' ? '-' : '+'}
						{planValue} ₽
					</p>
				</div>
			</div>
		</div>
	)
}
export default CashRangeSection
