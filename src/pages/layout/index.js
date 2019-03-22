// import api from './api'
import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import '../../App.css';
import { Layout, Menu, Icon } from 'antd'
import routes from '../../Router/layout'

const { Header, Sider, Content, Footer } = Layout

class App extends Component {
  constructor(props) {
    // es6继承必须用super调用父类的constructor
    super(props)
    this.state = {
      collapsed: false,
      data: 'hello',
      person: ''
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  async componentDidMount () {}
  handleClickMenuItem (item) {
    sessionStorage.setItem('menuItmeKey', String(item.key))
  }
  menuItem = () => {
    return routes.map((item, index) => {
      return (
      <Menu.Item key={ index } onClick={ item => this.handleClickMenuItem(item) }>
        <Link to={item.path}>
          <Icon type={ item.icon } />
          <span>{ item.title }</span>
        </Link>
      </Menu.Item>)
    })
  }
  render() {
    const logoClass = this.state.collapsed ? 'logoMin' : 'logoMax'
    return (
      <BrowserRouter>
        <div>
          <Layout style={{minHeight: '100vh'}}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className={logoClass} />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={ [sessionStorage.getItem('menuItmeKey') || '0'] }>
                { this.menuItem() }
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content className='content'>
              {routes.map((route, i) => (
                <Route
                key={i}
                path={route.path}
                component={route.component}
              />
              ))}
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Created by Gong
              </Footer>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
