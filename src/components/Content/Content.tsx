import classNames from 'classnames/bind'
import React from 'react'
import Dashboard from '../NavPages/Dashboard/Dashboard'
import styles from './Content.module.scss'
const cnb = classNames.bind(styles)

interface Props {
	urlStringParam: string
}

export type QueryUrlParamType =
	| 'dashboard'
	| 'asset'
	| 'expenses'
	| 'investment'
	| 'purpose'
	| 'revenue'
	| 'unexpectedExpenses'
	| 'settings'
const Content: React.FC<Props> = ({urlStringParam}) => {
	const getContent = (param: QueryUrlParamType) => {
		switch (param) {
			case 'dashboard':
				return <Dashboard />
			case 'revenue':
				return <></>
			case 'asset':
				return <></>
			case 'expenses':
				return <></>
			case 'investment':
				return <></>
			case 'purpose':
				return <></>
			case 'unexpectedExpenses':
				return <></>
			case 'settings':
				return <></>
			default:
				return <Dashboard />
		}
	}
	return <div className={cnb('contentWrapper')}>{getContent(urlStringParam as QueryUrlParamType)}</div>
}
export default Content
