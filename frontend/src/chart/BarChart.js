import React from 'react'
import { Line, defaults, Bar } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  const data={
    labels: ['I', 'II', 'III', 'IV', 'V', 'VI'],
    datasets: [
      {
        label: 'Semster-wise SGPA',
        data: [9.5, 4, 7, 6.5, 8.2, 9.3],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor:  'rgba(153, 102, 255, 1)',
        borderWidth: '5px',
        borderWidth: 2,
      },
    ],
  }
  const options={
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontSize: 12,
      },
    },
  }

  return (
    <div>
      <Bar
        data={data}
        height={350}
        width={600}
        options={options}
      />
    </div>
  )
}

export default BarChart
