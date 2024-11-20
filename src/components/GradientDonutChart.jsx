/* eslint-disable react/prop-types */
import ReactApexChart from 'react-apexcharts'

const GradientDonutChart = ({ data }) => {
  const series = Object.values(data)
  const labels = Object.keys(data)

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
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
      }
    },
    title: {
      text: 'Institution Types Breakdown'
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

export default GradientDonutChart
