/* eslint-disable react/prop-types */
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
const { Header: AntdHeader } = Layout

const Header = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <AntdHeader
      style={{
        padding: 0,
        background: colorBgContainer
      }}
    >
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64
        }}
      />
    </AntdHeader>
  )
}

export default Header
