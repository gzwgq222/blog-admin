import React from 'react'
import api from '../../api'

import {
  Table, Tag, Form, Icon, Input, Button 
} from 'antd';

// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
class articleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [
        {
          title: '标题',
          dataIndex: 'name',
          key: 'title'
        },
        {
          title: '作者',
          dataIndex: 'age',
          key: 'name',
        },
        {
          title: '关键字',
          dataIndex: 'age',
          key: 'keywaorld',
        },
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
              })}
            </span>
          ),
        },
        {
          title: '分类',
          dataIndex: 'age',
          key: 'classify',
        },
        {
          title: '状态',
          dataIndex: 'age',
          key: 'state',
        },
        {
          title: '观看-点赞-评论',
          dataIndex: 'age',
          key: 'viewTotal',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <Button type='danger' onClick={ _ => this.handleClick()}>delete</Button>
            </span>
          ),
        }
      ]
    }
  }

  handleClick () {
    console.log(this)
  }
  async componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
    const {code, data } = await api.get('example/info', {name: 'gong'})
    if (code === 1000) this.setState({
      data
    })
    console.log(data)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    });
  }
  render() {
    // getFieldsError
    const {
      getFieldDecorator, getFieldError, isFieldTouched,
    } = this.props.form
    // disabled={hasErrors(getFieldsError())
    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
          <Button className='mr10' type="primary" htmlType="submit">
            search
          </Button>
          <Button type='primary'>create</Button>
        </Form.Item>
      </Form>
      <Table columns={ this.state.columns } dataSource={ this.state.data } />
      </div>
    )
  }
}
const article = Form.create({ name: 'horizontal_login' })(articleList)
export default article