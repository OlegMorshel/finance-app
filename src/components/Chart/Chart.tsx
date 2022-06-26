import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from 'recharts'
import {format, getDay, parseISO, subDays} from 'date-fns'
import {TooltipProps} from 'recharts'
import styles from './Chart.module.scss'
import classNames from 'classnames/bind'
const cnb = classNames.bind(styles)
interface DataType {
	date: string
	value: number
}
const Chart = () => {
	const data: DataType[] = []
	for (let num = 30; num >= 0; num--) {
		data.push({
			date: subDays(new Date(), num).toISOString().substring(0, 10),
			value: 1 + Math.random(),
		})
	}

	const CustomTooltip = ({active, payload, label}: TooltipProps<ValueType, NameType>) => {
		if (active && payload) {
			return (
				<div className={cnb('tooltip')}>
					<h4>{format(parseISO(label), 'eeee, d MMM, yyyy')}</h4>
					<p>{(payload[0]?.value as number)?.toFixed(2)}₽</p>
				</div>
			)
		}

		return null
	}

	return (
		<>
			<ResponsiveContainer width={'100%'} height={400}>
				<AreaChart data={data}>
					<defs>
						<linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#46a76e' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#46a76e' stopOpacity={0} />
						</linearGradient>
						{/* <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
						</linearGradient> */}
					</defs>
					<Area dataKey={'value'} stroke={'#46a76e'} fill={'url(#color)'} />
					{/* <Area dataKey={'value'} stroke={'#46a76e'} fill={'url(#color)'} /> */}

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
