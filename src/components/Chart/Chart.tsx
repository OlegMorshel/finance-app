import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from 'recharts'
import {format, getDay, parseISO, subDays} from 'date-fns'
import {TooltipProps} from 'recharts'
import styles from './Chart.module.scss'
import classNames from 'classnames/bind'
const cnb = classNames.bind(styles)
interface DataType {
	date: string
	value: number
	value2: number
}
interface Props {
	height?: number
}
const Chart: React.FC<Props> = ({height = 225}) => {
	const data: DataType[] = []
	for (let num = 30; num >= 0; num--) {
		data.push({
			date: subDays(new Date(), num).toISOString().substring(0, 10),
			value: 1 + Math.random(),
			value2: 1 - Math.random(),
		})
	}

	const CustomTooltip = ({active, payload, label}: TooltipProps<ValueType, NameType>) => {
		if (active && payload) {
			return (
				<div className={cnb('tooltip')}>
					<h4>{format(parseISO(label), 'eeee, d MMM, yyyy')}</h4>
					<p>{Number(payload[0]?.value)?.toFixed(2)}₽</p>
					<p>{Number(payload[1]?.value)?.toFixed(2)}₽</p>
				</div>
			)
		}

		return null
	}

	return (
		<>
			<ResponsiveContainer width={'100%'} height={height}>
				<AreaChart data={data}>
					<defs>
						<linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='15%' stopColor='#00c054' stopOpacity={0.8} />
							<stop offset='100%' stopColor='#00c054' stopOpacity={0.05} />
						</linearGradient>
						<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#f01a42' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#f01a42' stopOpacity={0} />
						</linearGradient>
					</defs>
					<Area dataKey={'value'} stroke={'#00c054'} fill={'url(#color)'} />
					<Area dataKey={'value2'} stroke={'#f01a42'} fill={'url(#colorPv)'} />

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
