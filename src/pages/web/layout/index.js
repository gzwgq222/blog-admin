import React, { Component } from 'react'
import { 
  Layout,
  Col,
  BackTop
} from 'antd'
import {
  Route
} from 'react-router-dom'
import HeaderCustom from '../header'
import SiderCustom from '../sider'
import routes from '../../../Router/web'
import './index.less'

const { Content, Footer } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    document.title = '牧羊人博客'
  }
  render() {
    const contentHeight = document.body.clientHeight - 64 -62
    return (
      <div>
      <Layout className="wrapper">
        
        <HeaderCustom {...this.props}></HeaderCustom>
        
        <Layout className="wrapper-container">
          <Layout className="wrapper-content">
            <Content style={{ paddingTop: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}}>
              <Col
                lg={{ span: 5, offset: 1 }}
                md={{ span: 6, offset: 1 }}
                xs={{ span: 0 }}
              >
                <SiderCustom {...this.props} />
              </Col>
              <Col
                lg={{ span: 16, offset: 1 }}
                md={{ span: 16, offset: 1 }}
                xs={{ span: 24 }}
                className="about-wrapper"
              >
                {
                  routes.map(({ path, key, component, ...props }, index) => (
                    <Route key={index}
                      exact
                      path={path}
                      component={component}
                      {...props}
                    />
                  ))
                }
              </Col>
            </Content>
          </Layout>
          <Footer style={{textAlign: 'center'}}>
            Copyright © Gong 2019
          </Footer>
        </Layout>
      </Layout>
      <BackTop visibilityHeight='100' />
      </div>
    )
  }
}

export default Index