/* eslint-disable react/prop-types */
import ReactApexChart from 'react-apexcharts'

const ApexChart = ({ data }) => {
  const series = [
    {
      name: 'Number of Institutions',
      data: Object.values(data)
    }
  ]

  const labels = Object.keys(data)

  const options = {
    chart: {
      type: 'bar',
      height: 380
    },
    title: {
      text: 'Institution Sizes'
    },
    xaxis: {
      categories: labels,
      title: {
        text: 'Institution Size'
      }
    },
    yaxis: {
      title: {
        text: 'Number of Institutions'
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' institutions'
        }
      }
    },
    labels: {
      style: {
        colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700'],
        fontSize: '12px'
      }
    }
  }

  return (
    <div>
      <ReactApexChart options={options} series={series} type='bar' height={380} />
    </div>
  )
}

export default ApexChart
