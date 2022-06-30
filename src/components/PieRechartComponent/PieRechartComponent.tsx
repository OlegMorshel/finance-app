import classNames from 'classnames/bind'
import React from 'react'
import {PieChart, Pie, Cell, Tooltip, Legend, TooltipProps, ResponsiveContainer, Label} from 'recharts'
import {NameType, ValueType} from 'recharts/types/component/DefaultTooltipContent'
import styles from './PieRechartComponent.module.scss'
const cnb = classNames.bind(styles)

export interface PieDataType {
	name: string
	value: number
}
interface Props {
	list: PieDataType[]
}
const PieRechartComponent: React.FC<Props> = ({list}) => {
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF']

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
		return (
			<div>
				{payload?.map((legend) => {
					const {value, color, payload} = legend

					return (
						<div className={cnb('legendItemWrapper')} key={String(value) ?? '' + color}>
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
					data={list}
					color='#000000'
					dataKey='value'
					nameKey='name'
					cx='50%'
					cy='50%'
					radius={undefined}
					innerRadius={0}
					animationBegin={120}
					outerRadius='100%'
					fill='#8884d8'
					paddingAngle={5}
					startAngle={90}
					endAngle={-270}>
					{!!list.length && list.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
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
