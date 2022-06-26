import classNames from 'classnames/bind'
import React, {ReactNode} from 'react'
import styles from './UsualSection.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	children?: ReactNode
	title: string
	subtitle?: string
}
const UsualSection: React.FC<Props> = ({children, title, subtitle}) => {
	return (
		<div className={cnb('sectionWrapper')}>
			<div className={cnb('headerSection')}>
				<h3 className={cnb('title')}>{title}</h3>
				<h4 className={cnb('subtitle')}>{subtitle}</h4>
			</div>
			{children}
		</div>
	)
}
export default UsualSection
