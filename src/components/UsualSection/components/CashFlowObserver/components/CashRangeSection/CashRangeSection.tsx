import classNames from 'classnames/bind'
import React from 'react'
import styles from './CashRangeSection.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	title: string
	realValue: number
	planValue: number
	color: 'red' | 'green'
	height?: number
}
const CashRangeSection: React.FC<Props> = ({planValue, realValue, title, color, height = 20}) => {
	return (
		<div className={cnb('rangeSectionWrapper')}>
			<p className={cnb('title')}>{title}</p>
			<div className={cnb('sectionLayout')}>
				<div className={cnb('ranges')}>
					<div
						className={cnb('actualRange', {greenColor: color === 'green', redColor: color === 'red'})}
						style={{width: `${(realValue / Math.max(realValue, planValue)) * 100}%`, height: height}}
					/>
					<div
						className={cnb('planRange', {greenHiddenColor: color === 'green', redHiddenColor: color === 'red'})}
						style={{width: `${(planValue / Math.max(realValue, planValue)) * 100}%`, height: height}}
					/>
				</div>
				<div className={cnb('amounts')}>
					<p className={cnb('realAmount')} style={{height: height}}>
						{realValue} ₽
					</p>
					<p className={cnb('planAmount')} style={{height: height}}>
						{planValue} ₽
					</p>
				</div>
			</div>
		</div>
	)
}
export default CashRangeSection
