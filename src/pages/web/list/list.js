import React, { Component } from 'react'
import { timetrans, color } from '../../../utils'
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
      currentPage: 1
    }
  }
  componentWillMount() {
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
          dataSource='主是'
          renderItem={(item, index) => (
            <List.Item
              key={index}
              actions={
              [ 
                <IconText type="message" text={item.commentSize} />,
                // <IconText type="tags-o" text={
                //   item.tags.split(',').map(v => (
                //     <Tag
                //       key={item.id + Math.random()}
                //       color={color[Math.floor(Math.random()*color.length)]}
                //       onClick={()=>this.props.history.push(`/app/tags/${v}`)}
                //     >
                //       {v}
                //     </Tag>
                // ))
                // } />,
                item.catalog ?
                <IconText type="folder" text={
                  <Tag
                    color="orange"
                    key={item.catalog.id}
                    onClick={()=>this.props.history.push(`/app/catalog/${item.catalog.id}`)}
                  >
                    {item.catalog.name}
                  </Tag>
                }/> : null
              ]}
              extra={[
                timetrans(item.created_at)
              ]}
            >
              <List.Item.Meta
                className="list-item"
                title={item.title}
                description={item.summary}
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