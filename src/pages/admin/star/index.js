import React from 'react'
import { Table, Form, Input, Button, message, Modal } from 'antd';
import api from '../../../api'

class articleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      title: '',
      url: '',
      pageNo: 1,
      pageSize: 10,
      total: null,
      data: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index',
          width: 80,
          align: 'center'
        },
        {
          title: '标题',
          dataIndex: 'title'
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt'
        },
        {
          title: '操作',
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
    await api.post('star/destroy', {id: record.id})
    message.success('删除成功')
    this.getList()
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
    this.getList()
  }
  async getList () {
    this.setState({loading: true})
    const params = {
      title: this.state.title,
      pageNo: this.state.pageNo,
      pageSize: this.state.pageSize
    }
    const {data, total } = await api.get('star/list', params)
    data.forEach((item, index) => {
      item.index = this.state.pageSize * (this.state.pageNo - 1) + index + 1
    })
    this.setState({
      data,
      total,
      loading: false
      })
  }
  // 查询
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields( async(err, values) => {
      if (!err) {
        await this.setState({
          pageNo: 1,
          title: values.title || ''
        })
        this.getList()
      }
    });
  }
  handdleChange (e, name) {
    console.log(name)
    this.setState({
      [name]: e.target.value
    })
  }
  // 新增
  async handleOk () {
    const {url, title} = this.state
    const {code, data} = await api.post('star/create', {title, url})
    this.setState({
      visible: false,
      title: '',
      url: ''
    })
    if (code === 1000) message.success('新增成功！')
    else message.error(data)
    this.getList()
  }
  handleCancel () {
    this.setState({visible: false})
  }
  // page
  async handleOnChange (page) {
    await this.setState({
      pageNo: page.current,
      pageSize: page.pageSize
    })
    this.getList()
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
          <Input placeholder="请输入标题" value={ this.state.title } onChange={ e => this.handdleChange(e, 'title') } />
          <Input placeholder="请输入链接" value={ this.state.url } onChange={ e => this.handdleChange(e, 'url') } style={{marginTop: '10px'}} />
        </Modal>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
          {getFieldDecorator('title')(
            <Input placeholder="请输入标题" allowClear={true} />
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
        pagination={{
          current: this.state.pageNo,
          showSizeChanger: true,
          total: this.state.total,
          pageSize: this.state.pageSize,
          pageSizeOptions: ['10', '20', '30', '40'],
          showTotal (total) { return `Total ${total} `}
        }}
        loading={ this.state.loading }
        columns={ this.state.columns }
        dataSource={ this.state.data }
        rowKey={record => record.id}
        onChange={(page) => this.handleOnChange(page)}
      />
      </div>
    )
  }
}
const article = Form.create({ name: 'horizontal_login' })(articleList)

export default article