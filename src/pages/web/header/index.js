import React, { Component } from 'react'
import { 
  Layout,
  Row,
  Col,
  Button,
  Menu,
  Dropdown,
  Avatar,
  Icon
} from 'antd'
import './header.css'
import Navigate from '../menu'
import menus from '../menu/route'
const { Header } = Layout

class HeaderCustom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      register: false,
      nav: '首页'
    }
    this.menuClick = this.menuClick.bind(this)
    this.showLoginModal = this.showLoginModal.bind(this)
    this.showRegisterModal = this.showRegisterModal.bind(this)
    this.handleLoginCancel = this.handleLoginCancel.bind(this)
    this.handleRegisterCancel = this.handleRegisterCancel.bind(this)
  }
  showLoginModal() {
    this.setState({
      login: true
    })
  }
  showRegisterModal() {
    this.setState({
      register: true
    })
  }
  handleLoginCancel() {
    this.setState({
      login: false
    })
  }
  handleRegisterCancel() {
    this.setState({
      register: false
    })
  }
  menuClick({key}) {
    this.setState({
      nav: key
    })
    
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <span>
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    )
    return (
      <Header className="header-container">
        <Row>
          <Col 
            lg={{span: 4}}
            md={{span: 4}}
            xs={{span: 0}}
          >
            <div className="logo"><Icon type="smile" theme="twoTone" /> 牧羊人的博客</div>
          </Col>
          <Col 
            lg={{span: 14}}
            md={{span: 14}}
            xs={{span: 0}}
          >
            <Navigate
              menus={menus}
              mode="horizontal"
            />
          </Col>
          <Col
            lg={{span: 0}}
            md={{span: 0}}
            xs={{span: 10}}
            className="drop-down"
          >
             <Dropdown overlay={navigator} trigger={['click']}>
                <div>
                  <Button type="primary" ghost style={{border: 'none'}}>
                    {this.state.nav}<Icon type="caret-down" />
                  </Button>
                </div>
             </Dropdown>
          </Col>
          <Col 
            lg={{span: 6}}
            md={{span: 6}}
            xs={{span: 14}}
          >
            <div 
              className="nav-auth"
            >
              <Button 
                ghost 
                type="primary" 
                size="small" 
                style={{marginRight: 20}}
                onClick={this.showLoginModal}
              >
                登录
              </Button>
              <Button 
                ghost 
                type="danger" 
                size="small"
                onClick={this.showRegisterModal}
              >
                注册
              </Button>
            </div>

            {/* <div className="user-info">
              <Dropdown
                placement="bottomCenter"
                overlay={menu}
              >
                <Avatar
                  className="user-avatar"
                  shape="square" 
                  size="large"
                  style={{backgroundColor: 'rgb(255, 191, 0)'}}
                >
                </Avatar>
              </Dropdown>
            </div> */}
          </Col>
        </Row>
      </Header>
    )
  }
}

export default HeaderCustom