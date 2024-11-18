import { Layout, theme } from 'antd'

const { Content: AntdContent } = Layout
const Content = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  return (
    <AntdContent
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG
      }}
    >
      Content
    </AntdContent>
  )
}

export default Content
