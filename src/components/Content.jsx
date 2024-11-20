/* eslint-disable react/prop-types */
import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Layout, theme } from 'antd'
import { useEffect, useState } from 'react'
import Data from '~/data/college_analysis.json'
import {
  countByControl,
  countInstitutionSize,
  groupByMedianDebt,
  groupInstitutionsByLoanRate
} from '~/utils/filterData'
import ApexChart from './ApexChart'
import GradientDonutChart from './GradientDonutChart'
import LoanRateChart from './LoanRateChart'
import MedianDebtChart from './MedianDebtChart'

const { Content: AntdContent } = Layout
const Content = ({ collapsed }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const [controls, setControls] = useState()
  const [loanRate, setLoanRate] = useState()
  const [medianDebt, setMedianDebt] = useState()

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  useEffect(() => {
    setIsLoading(true)
    const data = countInstitutionSize(Data)
    setData(data)
    const controlsRes = countByControl(Data)
    setControls(controlsRes)
    const loanRateRes = groupInstitutionsByLoanRate(Data)
    setLoanRate(loanRateRes)
    const medianDebtRes = groupByMedianDebt(Data)
    setMedianDebt(medianDebtRes)
    setIsLoading(false)
    console.log('Data:', loanRateRes)
    console.log('medianDebtRes:', medianDebtRes)
  }, [])

  return (
    <AntdContent
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        width: collapsed ? 'calc(100vw - 80px - 48px)' : 'calc(100vw - 200px - 48px)',
        background: colorBgContainer,
        borderRadius: borderRadiusLG
      }}
    >
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <>
          <ApexChart data={data} />
          <Flex gap={2}>
            <GradientDonutChart data={controls} />
            <LoanRateChart data={loanRate} />
          </Flex>
          <MedianDebtChart data={medianDebt} />
        </>
      )}
    </AntdContent>
  )
}

export default Content
