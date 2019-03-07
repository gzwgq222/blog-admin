import React from 'react'
import api from '../../api'
// import formDate from '../../until/formDate'
// Tag
import { Table, Form, Input, Button, message, Modal, Tag } from 'antd';

// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
class articleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      tag: '',
      data: [],
      columns: [
        {
          title: '标签名',
          dataIndex: 'name',
          render: name => (
            <Tag color='cyan'>{ name }</Tag>
          )
        },
        {
          title: '创建时间',
          dataIndex: 'date',
          key: 'date',
          render: date => (
            <span>{  date }</span>
          )
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
  componentDidMount() {

    console.log(new Date(1551952832698))
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
    this.getList()
  }
  async getList () {
    const {code, data } = await api.get('tag/list')
    if (code === 1000) this.setState({ data })
  }
  async handleCreate () {
    const { code } = await api.post('example/add', {name: '小花'})
    if (code === 1000) this.getList()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.form)
    this.props.form.validateFields( async(err, values) => {
      // if (!err) {
      //   console.log('Received values of form: ', values)
      //   const { code } = await api.post('example/add', values)
      //   if (code === 1000) {
      //     message.success('新增成功！')
      //     this.getList()
      //   }
      // }
      console.log(32)
    });
  }
  handdleChange (e) {
    this.setState({tag: e.target.value})
  }
  async handleOk () {
    const { code } = await api.post('tag/create', {name: this.state.tag})
    if (code === 1000) {
      this.setState({
        visible: false,
        tag: ''
      })
      message.success('新增成功！')
      this.getList()
    }
  }
  handleCancel () {
    this.setState({visible: false})
  }
  render() {
    return (
      <div>
        <Modal
          title="标签"
          visible={ this.state.visible }
          onOk={this.handleOk.bind(this)}
          onCancel={ this.handleCancel.bind(this) }>
          <Input placeholder="请输入标签名" value={ this.state.tag } onChange={ e => this.handdleChange(e) } />
        </Modal>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input placeholder="请输入标签名" />
          </Form.Item>
          <Form.Item>
            {/* htmlType="submit" */}
          <Button className='mr10' type="primary" htmlType="submit">search</Button>
          <Button type='primary' onClick={ _ => this.setState({visible: true}) }>create</Button>
        </Form.Item>
      </Form>
      <Table columns={ this.state.columns } dataSource={ this.state.data } rowKey={record => record._id} className='mt10' />
      </div>
    )
  }
}
const article = Form.create({ name: 'horizontal_login' })(articleList)

export default article