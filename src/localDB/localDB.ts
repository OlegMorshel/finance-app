import {AimSvg, CashConditionals, DashboardSvg, InvestSvg, MonetizationSvg, ReceiptSvg, SettingsSvg, UnderLimitSvg} from '../assets/Icons'
export enum PagesType {
	DASHBOARD = 'DASHBOARD',
	REVENUE = 'REVENUE',
	EXPENSES = 'EXPENSES',
	INVESTMENT = 'INVESTMENT',
	UNEXPECTED_EXPENSES = 'UNEXPECTED_EXPENSES',
	ASSET = 'ASSET',
	PURPOSE = 'PURPOSE',
	SETTINGS = 'SETTINGS',
}
export interface NavBarItemType {
	id: PagesType
	name: string
	icon: JSX.Element
}
export const NavBarItems: NavBarItemType[] = [
	{
		id: PagesType.DASHBOARD,
		name: 'Dashboard',
		icon: DashboardSvg(),
	},
	{
		id: PagesType.REVENUE,
		name: 'Revenue',
		icon: MonetizationSvg(),
	},
	{
		id: PagesType.EXPENSES,
		name: 'Expenses',
		icon: ReceiptSvg(),
	},
	{
		id: PagesType.INVESTMENT,
		name: 'Investment',
		icon: InvestSvg(),
	},
	{
		id: PagesType.UNEXPECTED_EXPENSES,
		name: 'Unexpected expenses',
		icon: UnderLimitSvg(),
	},
	{
		id: PagesType.ASSET,
		name: 'Asset',
		icon: CashConditionals(),
	},
	{
		id: PagesType.PURPOSE,
		name: 'Purposes',
		icon: AimSvg(),
	},
	{
		id: PagesType.SETTINGS,
		name: 'Settings',
		icon: SettingsSvg(),
	},
]
