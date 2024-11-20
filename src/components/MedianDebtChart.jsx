/* eslint-disable react/prop-types */
import ReactApexChart from 'react-apexcharts'

const MedianDebtChart = ({ data }) => {
  const labels = data.map(item => item.range)
  const series = data.map(item => item.institutions.length)

  const options = {
    chart: {
      width: 500,
      type: 'donut'
    },
    labels: labels,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient'
    },
    legend: {
      formatter: function (val, opts) {
        return val + ' : ' + opts.w.globals.series[opts.seriesIndex]
      }
    },
    title: {
      text: 'Median Debt'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  }

  return <ReactApexChart options={options} series={series} type='donut' width={500} />
}

export default MedianDebtChart
