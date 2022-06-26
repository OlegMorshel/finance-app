import { NavigateFunction } from 'react-router-dom'
import {NavBarItemType, PagesType} from '../../../localDB/localDB'

export const getQueryParams = (id: PagesType): string => {
	switch (id) {
		case PagesType.DASHBOARD:
			return 'dashboard'
		case PagesType.ASSET:
			return 'asset'
		case PagesType.EXPENSES:
			return 'expenses'
		case PagesType.INVESTMENT:
			return 'investment'
		case PagesType.PURPOSE:
			return 'purpose'
		case PagesType.REVENUE:
			return 'revenue'
		case PagesType.UNEXPECTED_EXPENSES:
			return 'unexpectedExpenses'
		case PagesType.SETTINGS:
			return 'settings'
		default:
			return ''
	}
}

export const selectNavItem = (item: NavBarItemType, navigate: NavigateFunction) => {
	navigate(
		{
			pathname: '/',
			search: getQueryParams(item.id),
		},
		{replace: true}
	)
}