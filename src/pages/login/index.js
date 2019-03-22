import React from 'react'
import { Form, Icon, Input, Button, Card  } from 'antd';
import Particles from 'reactparticles.js'
import './index.css'

class login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <Particles id="particles1" config="particles1.json" height='90%' />
        <Card className="login-form" style={{width: 300,borderRadius: 4}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

const Login = Form.create({ name: 'normal_login' })(login)

export default Login