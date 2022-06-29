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
		name: 'Рабочий стол',
		icon: DashboardSvg(),
	},
	{
		id: PagesType.REVENUE,
		name: 'Доходы',
		icon: MonetizationSvg(),
	},
	{
		id: PagesType.EXPENSES,
		name: 'Расходы',
		icon: ReceiptSvg(),
	},
	{
		id: PagesType.INVESTMENT,
		name: 'Инвестиции',
		icon: InvestSvg(),
	},
	{
		id: PagesType.UNEXPECTED_EXPENSES,
		name: 'Непредвиденные расходы',
		icon: UnderLimitSvg(),
	},
	{
		id: PagesType.ASSET,
		name: 'КЭШ',
		icon: CashConditionals(),
	},
	{
		id: PagesType.PURPOSE,
		name: 'Цели',
		icon: AimSvg(),
	},
	{
		id: PagesType.SETTINGS,
		name: 'Настройки',
		icon: SettingsSvg(),
	},
]
