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
      loading: false,
      visible: false,
      tag: '',
      name: '',
      page: 10,
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
          width: 120,
          align: 'center',
          render: record => (
            <span>
              <Button ghost type='danger' onClick={this.handleClick.bind(this, record)}>delete</Button>
            </span>
          ),
        }
      ]
    }
  }
  async handleClick (record) {
    const {code} = await api.post('tag/delete', {id: record.id})
    if (code === 1000) {
      message.success('删除成功')
      this.getList()
    }
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
    this.getList()
  }
  async getList (name) {
    this.setState({loading: true})
    const {code, data } = await api.get('tag/list', {name, page: this.state.page})
    if (code === 1000) {
      this.setState({ data })
      this.setState({loading: false})
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields( async(err, values) => {
      if (!err) {
        this.getList(values.name)
        // const { code } = await api.post('example/add', values)
        // if (code === 1000) {
        //   message.success('新增成功！')
        //   this.getList()
        // }
      }
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
    const { getFieldDecorator } = this.props.form
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
          {getFieldDecorator('name')(
            <Input placeholder="请输入标签名" allowClear={true} />
          )}
          </Form.Item>
          <Form.Item>
            {/* htmlType="submit" */}
          <Button className='mr10' type="primary" htmlType="submit">search</Button>
          <Button type='primary' onClick={ _ => this.setState({visible: true}) }>create</Button>
        </Form.Item>
      </Form>
      <Table
      bordered
      className='mt10'
      loading={ this.state.loading }
      columns={ this.state.columns }
      dataSource={ this.state.data }
      rowKey={record => record.id} />
      </div>
    )
  }
}
const article = Form.create({ name: 'horizontal_login' })(articleList)

export default article