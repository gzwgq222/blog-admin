import React from 'react'
import { Link } from 'react-router-dom'
import { color } from '../../../utils'
import { Table, Form, Input, Button, message, Tag } from 'antd';
import api from '../../../api'

class articleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      title: '',
      data: [],
      pageNo: 1,
      pageSize: 10,
      columns: [
        {
          title: 'index',
          dataIndex: 'index',
          key: 'index',
          width: 80,
          align: 'center'
        },
        {
          title: 'title',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: 'author',
          dataIndex: 'author',
          key: 'keywaorld',
        },
        {
          title: 'summary',
          dataIndex: 'summary',
          key: 'summary',
          width: 400
        },
        {
          title: 'category',
          dataIndex: 'category',
          key: 'category',
          render: category => (
            category.map((v, index) => <Tag key={index} color={color[Math.floor(Math.random()*color.length)]}>{ v }</Tag>)
          )
        },
        {
          title: 'state',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: 'time',
          dataIndex: 'createdAt',
          key: 'createdAt'
        },
        {
          title: 'action',
          align: 'center',
          width: 180,
          render: record => (
            <span>
              <Button ghost type='primary' className='mr10' onClick={this.handleEdit.bind(this, record.id)}>edit</Button>
              <Button ghost type='danger' onClick={this.handleDelete.bind(this, record.id)}>delete</Button>
            </span> 
          )
        }
      ]
    }
  }


  componentDidMount() {
    this.getList()
  }
  async handleDelete (id) {
    const {code} = await api.post('article/destroy', {id})
    if (code === 1000) {
      message.success('删除成功')
      this.getList()
    }
  }
  handleEdit (id) {
    this.props.history.push(`/admin/article-edit/${id}`)
  }
  async getList () {
    this.setState({loading: true})
    const params = {
      title: this.state.title,
      pageNo: this.state.pageNo,
      pageSize: this.state.pageSize
    }
    const {data } = await api.get('/article/list', params)
    data.forEach((item, index) => {
      item.index = this.state.pageSize * (this.state.pageNo - 1) + index + 1
    })
    this.setState({
      data,
      loading: false
     })
  }
  async handleCreate () {
    const { code } = await api.post('example/add', {name: '小花'})
    if (code === 200) this.getList()
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.setState({
          pageNo: 1,
          title: values.title || ''
        })
        this.getList()
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('title')(
              <Input placeholder="请输入标题" allowClear={true} />
            )}
          </Form.Item>
          <Form.Item>
          <Button className='mr10' type="primary" htmlType="submit">
            search
          </Button>
          <Link to='/admin/article-add'>
            <Button type='primary'>create</Button>
          </Link>
        </Form.Item>
      </Form>
      <Table
      bordered
      className='mt10'
      loading={this.state.loading}
      columns={ this.state.columns }
      dataSource={ this.state.data }
      rowKey={record => record.id} />
      </div>
    )
  }
}
const article = Form.create({ name: 'horizontal_login' })(articleList)

export default article