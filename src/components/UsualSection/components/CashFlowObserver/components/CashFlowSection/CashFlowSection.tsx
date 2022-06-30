import classNames from 'classnames/bind'
import React from 'react'
import styles from './CashFlowSection.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	title: string
	subtitle: string
}
const CashFlowSection: React.FC<Props> = ({subtitle, title}) => {
	return (
		<div className={cnb('sectionWrapper')}>
			<h3 className={cnb('title')}>{title}</h3>
			<p className={cnb('subtitle')}>{subtitle}</p>
		</div>
	)
}
export default CashFlowSection
