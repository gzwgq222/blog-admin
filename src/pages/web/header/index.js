import React, { Component } from 'react'
import { 
  Layout,
  Row,
  Col,
  Menu,
  Icon
} from 'antd'
import './index.less'
import { Link } from 'react-router-dom'
import menus from '../../../Router/web'
const { Header } = Layout

class HeaderCustom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  handleClickBars () {
    this.setState({visible: true})
  }
  render() {
    const key = sessionStorage.getItem('webKey') || '0'

    const list = menus.filter(v => v.menu)
    const menuList = list.map((item, i) => {
      return <Menu.Item key={i} onClick={ () => sessionStorage.setItem('webKey', String(i)) }>
        <Link to={item.path}>
          <Icon type={item.icon} />
          <span className="nav-text">{item.title}</span>
        </Link>
      </Menu.Item>
    })
    
    return (
      <Header className="header-container">
        <Row>
          <Col lg={{span: 4}} md={{span: 4}} xs={{span: 0}}>
            <div className="logo"><Icon type="smile" theme="twoTone" /> 牧羊人的博客</div>
          </Col>
          <Col lg={{span: 14}} md={{span: 14}} xs={{span: 24}} className='mobile'>
            <Menu mode="horizontal" defaultSelectedKeys={[key]}>
              { menuList }
            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default HeaderCustom