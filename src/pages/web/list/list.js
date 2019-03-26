import React, { Component } from 'react'
import { timetrans, color } from '../../../utils'
import api from '../../../api'

import { 
  List,
  Icon,
  Tag
} from 'antd'
import './list.css'

class BlogList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      pageNo: 1,
      pageSize: 10,
      data: []
    }
  }
  componentDidMount() {
    this.getList()
  }
  async getList () {
    this.setState({loading: true})
    const params = {
      pageNo: this.state.pageNo,
      pageSize: this.state.pageSize
    }
    const { data, code } = await api.get('/article/list', params)
    data.forEach((item, index) => {
      item.index = this.state.pageSize * (this.state.pageNo - 1) + index + 1
    })
    code === 1000 && this.setState({data})
  }
  render() {
    const pagination = {
      pageSize: 5,
      current: 1,
      total: 10,
      size: 'small',
      onChange: ((page, pageSize) => {
        this.setState({
          currentPage: page
        })
      })
    }
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )
    return (
      <div className="list-wrapper">
        <List
          itemLayout="vertical"
          size="large"
          pagination={pagination}
          dataSource={this.state.data}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              actions={
              [ 
                <IconText type="message" text={item.commentSize} />,
                <IconText type="tags-o" text={
                  item.tag.split(',').map(v => (
                    <Tag
                      key={item + Math.random()}
                      color={color[Math.floor(Math.random()*color.length)]}
                      onClick={()=>this.props.history.push(`/app/tags/${v}`)}
                    >
                      {v}
                    </Tag>
                ))
                } />,
                item.category ?
                <IconText type="folder" text={
                  <Tag
                    color="orange"
                    key={item.category}
                    onClick={()=>this.props.history.push(`/app/catalog/${item.catalog.id}`)}
                  >
                    {item.category}
                  </Tag>
                }/> : null
              ]}
              extra={[
                timetrans(item.createdAt)
              ]}
            >
              <List.Item.Meta
                className="list-item"
                title={item.title}
                description={item.desc}
                onClick={()=>this.props.history.push(`/app/blog/desc/${item.id}`)}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default BlogList