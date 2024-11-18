import { Layout } from 'antd'
import { useState } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content />
      </Layout>
    </Layout>
  )
}
export default App
