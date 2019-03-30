import React from 'react'
 
export  default function requireLogin(Component) {
  // 组件有已登陆的模块 直接返回 (防止从新渲染)
  if (Component.requireLogin) {
  return Component.requireLogin
  }

  // 创建验证组件
  class requireLogin extends Component {
    constructor(props) {
      super(props)
      this.state = {
        login: true
      }
    }

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      // 判断登陆
      const login = sessionStorage.getItem('blogUser')
      // 未登陆重定向到登陆页面
      const pathname = this.props.location.pathname !== '/login'

      if (!login && pathname) {
        this.props.history.push('/login')
        return
      }
      this.setState({login})
    }

    render() {
      if (this.state.login) {
      return <Component {...this.props}/>
      }
      return ''
    }
  }
  Component.requireLogin = requireLogin
  return Component.requireLogin

}