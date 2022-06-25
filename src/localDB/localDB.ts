import {AimSvg, CashConditionals, DashboardSvg, InvestSvg, MonetizationSvg, ReceiptSvg, SettingsSvg, UnderLimitSvg} from '../assets/Icons'

export interface NavBarItemType {
	id: number
	name: string
	icon: JSX.Element
}
export const NavBarItems: NavBarItemType[] = [
	{
		id: 1,
		name: 'Dashboard',
		icon: DashboardSvg(),
	},
	{
		id: 2,
		name: 'Revenue',
		icon: MonetizationSvg(),
	},
	{
		id: 3,
		name: 'Expenses',
		icon: ReceiptSvg(),
	},
	{
		id: 4,
		name: 'Investment',
		icon: InvestSvg(),
	},
	{
		id: 5,
		name: 'Unexpected expenses',
		icon: UnderLimitSvg(),
	},
	{
		id: 6,
		name: 'Asset',
		icon: CashConditionals(),
	},
	{
		id: 7,
		name: 'Purposes',
		icon: AimSvg(),
	},
	{
		id: 8,
		name: 'Settings',
		icon: SettingsSvg(),
	},
]
