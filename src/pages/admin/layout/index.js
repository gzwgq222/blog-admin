// import api from './api'
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'
import routes from '../../../Router/admin'
import './index.less'

const { Header, Sider, Content, Footer } = Layout

class App extends Component {
  constructor(props) {
    // es6继承必须用super调用父类的constructor
    super(props)
    this.state = {
      collapsed: false,
      data: 'hello',
      person: '',
      userName: sessionStorage.getItem('blogUser') || ''
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  async componentDidMount () {
    document.title = 'admin'
  }
  handleClickMenuItem (item) {
    sessionStorage.setItem('menuItmeKey', String(item.key))
  }
  handleClickDrop () {
    this.props.history.push('/login')
  }
  menuItem = () => {
    return routes.filter(item => item.menu).map((item, index) => {
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
    const menu = (
      <Menu onClick={ this.handleClickDrop.bind(this) }>
        <Menu.Item key="1">login out</Menu.Item>
      </Menu>
    )
    return (
        <div>
          <Layout style={{minHeight: '100vh'}}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}>
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
                <span className='user'>
                  <Avatar style={{ backgroundColor: '#f56a00' }}>{this.state.userName}</Avatar>
                  <Dropdown overlay={menu} className='ml10'>
                      <Icon type="down" />
                  </Dropdown>
                </span>
              </Header>
              <Content className='content'>
                {routes.map((route, i) => (
                  <Route
                  key={i}
                  excat={route.excat}
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
    )
  }
}

export default App;
