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

import './layout.css'
const { Content, Footer } = Layout
class Index extends Component {
  render() {
    const contentHeight = document.body.clientHeight - 64 -62
    return (
      <Layout className="wrapper">
        <HeaderCustom></HeaderCustom>
        <Layout className="wrapper-container">
          <Layout className="wrapper-content">
            <Content
              style={{ padding: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}}
            >
            <Col
              lg={{ span: 6, offset: 1 }}
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
              Gong
            </Col>
              {/* {
                routes.map(({ path, key, component, ...props }) => (
                  <Route key={key}
                    exact
                    path={path}
                    component={component}
                    {...props}
                  />
                ))
              } */}
            </Content>
          </Layout>
          <Footer
            style={{textAlign: 'center'}}
          >
            Copyright © Gong 2019
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Index