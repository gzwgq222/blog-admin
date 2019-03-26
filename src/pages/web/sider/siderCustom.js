import React, { Component } from 'react'
import avatar from '../../../assets/lf.jpg'
import {
  Card,
  Tag,
  Divider,
  Tooltip,
  Icon
} from 'antd'
import './sider.less'
import api from '../../../api'
import { color } from '../../../utils'

class SiderCustom extends Component {
  constructor() {
    super()
    this.state = {
      tags: []
    }
    this.getTags = this.getTags.bind(this)
  }
  componentDidMount() {
    this.getTags()
  }
  async getTags () {
    const {data, code} = await api.get('tag/list/all')
    code === 1000 && this.setState({tags: data})
   }
  render() {
    return (
      <div className="sider-container">
        <div className="admin-info">
          <header>
            <img src={avatar} alt="avatar" title='我叫路飞，要成为海贼王的男人'/>
          </header>
          <p className="admin-name">
            牧羊人
          </p>
          <p className="admin-desc">
            不爱骑行，不爱跳舞
            <br />
            前端打杂人员，全村最靓的仔
          </p>
        </div>
        <div className="recent-article">
          <Card bordered={false}>
            <Divider orientation="left">最近文章</Divider>
            {/* {
              this.props.content ? <ul className="recent-list">
                {
                  this.props.content.map(v => (
                      <li key={v.id} onClick={() => this.props.history.push(`/app/blog/desc/${v.id}`)}>
                        {v.title}
                      </li>
                  ))
                }
              </ul>
              : null
            } */}
          </Card>
        </div>
        <div className="tags-wrapper">
          <Card bordered={false}>
            <Divider orientation="left">标签</Divider>
            <div className="tags-content">
              {
                this.state.tags.map(v => (
                  <Tag
                    key = {v.id}
                    color={color[Math.floor(Math.random()*color.length)]}
                    // onClick={()=>this.props.history.push(`/app/tags/${v}`)}
                  >
                    {v.name}
                  </Tag>
                ))
              }
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default SiderCustom