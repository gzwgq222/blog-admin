import React, { Component } from 'react';
import {
  // message,
  List,
  Tag
} from 'antd'
import { color } from '../../../utils'
import './index.less'

class Collect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      currentPage: 1,
      totalElements: 0
    }
  }
  render() {
    const pagination = {
      pageSize: 10,
      size: 'small',
      current: this.state.currentPage,
      total: this.state.totalElements,
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
          pagination={pagination}
          dataSource={this.state.data.rows}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={item.date}
            >
              <List.Item.Meta
                description={[<a key={item.link} href={item.link}>{item.title}</a>, 
                  <Tag
                    key={item.id}
                    className="star-author"
                    color={color[Math.floor(Math.random()*color.length)]}
                  >
                    {item.author}
                  </Tag>
                ]}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Collect