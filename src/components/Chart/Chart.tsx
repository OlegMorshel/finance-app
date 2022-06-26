import {Chart} from 'react-chartjs-2'
import React from 'react'
import {Chart as ChartJS, LineController, CategoryScale, LineElement, PointElement, LinearScale, Title} from 'chart.js'

const ChartSection: React.FC = () => {
	ChartJS.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title)
	return (
		<>
			<Chart
				type='line'
				width={'200px'}
				height={'100px'}
				options={{maintainAspectRatio: false}}
				data={{
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
					datasets: [
						{
							label: 'Dataset #1',
							backgroundColor: 'rgba(255,99,132,0.2)',
							borderColor: 'rgba(255,99,132,1)',
							borderWidth: 2,
							hoverBackgroundColor: 'rgba(255,99,132,0.4)',
							hoverBorderColor: 'rgba(255,99,132,1)',
							data: [65, 59, 20, 81, 56, 55, 40],

						},
					],
				}}
			/>
		</>
	)
}
export default ChartSection
