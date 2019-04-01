import React, { Component } from 'react'
import api from '../../../api'
import {
  List,
} from 'antd'
import './index.less'

class Collect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pageNo: 1,
      pageSize: 10,
      total: 0
    }
  }
  componentDidMount () {
    this.getList()
  }
  async getList () {
    const params = {
      title: '',
      pageNo: this.state.pageNo,
      pageSize: this.state.pageSize
    }
    const {data, total } = await api.get('star/list', params)
    this.setState({
      data,
      total
      })
  }
  render() {
    const pagination = {
      pageSize: 10,
      size: 'small',
      current: this.state.pageNo,
      total: this.state.total,
      // onChange: ((page, pageSize) => {
      //   this.setState({
      //     currentPage: page
      //   })
      // })
    }
    return (
      <div>
        <List
          className="star-list"
          header={<div className="star-header">文章收藏</div>}
          itemLayout="vertical"
          pagination={this.state.data.length ? pagination : null}
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item key={item.id} extra={item.date} >
              <List.Item.Meta description={[<a key={item.url} href={item.url} target='_blank' rel="noopener noreferrer">{item.title}</a>]}/>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Collect