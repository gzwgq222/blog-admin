import api from './api'
import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content, Footer } = Layout

class App extends Component {
  state = {
    collapsed: false,
    menuList: [
      { icon: 'home', title: '首页'},
      { icon: 'edit', title: '文章'},
      { icon: 'bars', title: '分类'}
    ]
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  async componentDidMount () {
    console.log(111111, api)
    const { code } = await api.get('/user/bar')
    console.log(code)
  }
  menuItem = () => {
    return this.state.menuList.map((item, index) => {
      return (
      <Menu.Item key={ index }>
        <Icon type={ item.icon } />
        <span>{ item.title }</span>
      </Menu.Item>)
    })
  }
  render() {
    return (
      <div>
        <Layout style={{height: '100vh'}}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
              Content
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
