import classNames from 'classnames/bind'
import React from 'react'
import {PieChart, Pie, Cell, Tooltip, Legend, TooltipProps, ResponsiveContainer, Label} from 'recharts'
import {NameType, ValueType} from 'recharts/types/component/DefaultTooltipContent'
import styles from './PieRechartComponent.module.scss'
const cnb = classNames.bind(styles)
const PieRechartComponent: React.FC = () => {
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF']

	const pieData = [
		{
			name: 'Chrome',
			value: 68.85,
		},
		{
			name: 'Firefox',
			value: 7.91,
		},
		{
			name: 'Edge',
			value: 6.85,
		},
		{
			name: 'Internet Explorer',
			value: 6.14,
		},
		{
			name: 'Others',
			value: 10.25,
		},
	]

	const CustomTooltip = ({active, payload, label}: TooltipProps<ValueType, NameType>) => {
		if (active && payload) {
			return (
				<div className='custom-tooltip' style={{backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc'}}>
					<label>{`${payload[0].name} : ${payload[0].value}%`}</label>
				</div>
			)
		}

		return null
	}

	const CustomLegend = (props: TooltipProps<ValueType, NameType>) => {
		const {payload} = props
		console.log('payload ', payload)
		return (
			<div>
				{payload?.map((legend) => {
					const {value, color, payload} = legend

					return (
						<div className={cnb('legendItemWrapper')}>
							<p className={cnb('legendPercent')}>{payload?.value} %</p>
							<div style={{background: color}} className={cnb('legendLabel')} />
							<p>{value}</p>
						</div>
					)
				})}
			</div>
		)
	}
	return (
		<ResponsiveContainer width={'100%'} height={350}>
			<PieChart>
				<Pie
					data={pieData}
					color='#000000'
					dataKey='value'
					nameKey='name'
					cx='45%'
					cy='50%'
					innerRadius='60%'
					outerRadius='80%'
					fill='#8884d8'
					startAngle={90}
					endAngle={-270}>
					{pieData.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Legend
					iconType='circle'
					layout='vertical'
					verticalAlign='middle'
					align='right'
					// style={{marginBottom: '15px'}}
					content={<CustomLegend />}
				/>
				<Tooltip content={<CustomTooltip />} />
			</PieChart>
		</ResponsiveContainer>
	)
}

export default PieRechartComponent
