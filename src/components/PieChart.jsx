import React from 'react'
import { PieChart as ReChart, Pie, Tooltip } from 'recharts'
import { ChartContainer } from './styles'
import { getChartData } from '../utils'

export default function PieChart({ chartData }) {
  const data = getChartData(chartData)
  return (
    <ChartContainer>
      <ReChart width={200} height={200} >
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          nameKey="name"
          dataKey="value"
          outerRadius={50}
          fill="#8884d8"
          label={true}
        />
        <Tooltip />
      </ReChart>
    </ChartContainer>
  )
}
