import React, { Component } from 'react'
import { 
  Layout,
  Col
} from 'antd'
import {
  Route
} from 'react-router-dom'
import HeaderCustom from '../header'
import SiderCustom from '../sider/siderCustom'
import routes from '../../../Router/web'
import './layout.css'
const { Content, Footer } = Layout

class Index extends Component {
  constructor(props) {
    // es6继承必须用super调用父类的constructor
    super(props)
    this.state = {}
  }
  componentDidMount () {}
  render() {
    const contentHeight = document.body.clientHeight - 64 -62
    return (
      <Layout className="wrapper">
        <HeaderCustom {...this.props}></HeaderCustom>
        <Layout className="wrapper-container">
          <Layout className="wrapper-content">
            <Content
              style={{ padding: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}}
            >
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 6, offset: 1 }}
              xs={{ span: 0 }}
            >
              <SiderCustom />
            </Col>
            <Col
              lg={{ span: 15, offset: 1 }}
              md={{ span: 15, offset: 1 }}
              xs={{ span: 24 }}
              className="about-wrapper"
            >
              {
                routes.map(({ path, key, component, ...props }) => (
                  <Route key={key}
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
    )
  }
}

export default Index