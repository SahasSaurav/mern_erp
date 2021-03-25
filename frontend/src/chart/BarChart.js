import React from 'react'
import { Line, defaults, Bar } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['I', 'II', 'III', 'IV', 'V', 'VI'],
          datasets: [
            {
              label: 'Semster-wise SGPA',
              data: [9.5, 4, 7, 6.5, 8.2, 9.3],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor:  'rgba(153, 102, 255, 1)',
              borderWidth: '5px',
             
            //   backgroundColor: [
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)',
            //   ],
            //   borderColor: [
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)',
            //   ],
              borderWidth: 2,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={350}
        width={600}
        options={{
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
        }}
      />
    </div>
  )
}

export default BarChart
