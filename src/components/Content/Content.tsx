import classNames from 'classnames/bind'
import React from 'react'
import Dashboard from '../NavPages/Dashboard/Dashboard'
import styles from './Content.module.scss'
const cnb = classNames.bind(styles)

interface Props {
	urlStringParam: string
}
const Content: React.FC<Props> = () => {
	return (
		<div className={cnb('contentWrapper')}>
			<Dashboard />
		</div>
	)
}
export default Content
