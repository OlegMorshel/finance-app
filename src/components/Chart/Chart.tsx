import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from 'recharts'
import {format, getDay, parseISO, subDays} from 'date-fns'
import {TooltipProps} from 'recharts'
import styles from './Chart.module.scss'
import classNames from 'classnames/bind'
const cnb = classNames.bind(styles)
export interface ChartDataType {
	date: string
	value: number
	value2?: number
	value3?: number
}
interface Props {
	height?: number
	list: ChartDataType[]
	options?: {
		colorFirstStatistic?: string
		colorSecondStatistic?: string
		colorThirdStatistic?: string
	}
}
const Chart: React.FC<Props> = ({height = 225, list, options}) => {
	const CustomTooltip = ({active, payload, label}: TooltipProps<ValueType, NameType>) => {
		if (active && payload) {
			return (
				<div className={cnb('tooltip')}>
					<h4 className={cnb('tooltipDate')}>{format(parseISO(label), 'eeee, d MMM, yyyy')}</h4>
					<div className={cnb('tooltipLabels')}>
						{payload
							.sort((prev, next) => Number(next.value) - Number(prev.value))
							.map((label) => (
								<div className={cnb('tooltipLabel')}>
									<div className={cnb('tooltipIcon')} style={{background: label.color}} />
									<p>{Number(label.value)?.toFixed(2)}₽</p>
								</div>
							))}
					</div>
				</div>
			)
		}
		return null
	}

	return (
		<>
			<ResponsiveContainer width={'100%'} height={height}>
				<AreaChart data={list}>
					<defs>
						<linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='15%' stopColor={options?.colorFirstStatistic ?? '#00c054'} stopOpacity={0.8} />
							<stop offset='100%' stopColor={options?.colorFirstStatistic ?? '#00c054'} stopOpacity={0.05} />
						</linearGradient>
						<linearGradient id='color-2' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor={options?.colorSecondStatistic ?? '#f01a42'} stopOpacity={0.8} />
							<stop offset='95%' stopColor={options?.colorSecondStatistic ?? '#f01a42'} stopOpacity={0} />
						</linearGradient>
						<linearGradient id='color-3' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor={options?.colorThirdStatistic ?? '#000000'} stopOpacity={0.8} />
							<stop offset='95%' stopColor={options?.colorThirdStatistic ?? '#000000'} stopOpacity={0} />
						</linearGradient>
					</defs>
					<Area dataKey={'value'} stroke={options?.colorFirstStatistic ?? '#00c054'} fill={'url(#color)'} />
					<Area dataKey={'value2'} stroke={options?.colorSecondStatistic ?? '#f01a42'} fill={'url(#color-2)'} />
					<Area dataKey={'value3'} stroke={options?.colorThirdStatistic ?? '#000000'} fill={'url(#color-3)'} />

					<XAxis
						dataKey={'date'}
						axisLine={false}
						tickLine={false}
						tickFormatter={(str) => {
							const date = parseISO(str)
							return format(date, 'MMM, d')
							// if (date.getDate() % 7 === 0) {
							// 	return format(date, 'MMM, d')
							// }
							// return ''
						}}
					/>

					<YAxis dataKey={'value'} axisLine={false} tickLine={false} tickCount={8} tickFormatter={(number) => `${number.toFixed(2)} ₽`} />

					<Tooltip content={<CustomTooltip />} />

					<CartesianGrid opacity={0.3} vertical={false} />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}
export default Chart
import {ValueType, NameType} from 'recharts/src/component/DefaultTooltipContent'
