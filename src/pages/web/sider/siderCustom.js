import React, { Component } from 'react'
import avatar from '../../../assets/lf.jpg'
import {
  Card,
  Tag
} from 'antd'
import './sider.css'
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
            <img src={avatar} alt="avatar"/>
          </header>
          <p className="admin-name">
            牧羊人
          </p>
          <p className="admin-desc">
            前端打杂人员，略微代码洁癖
          </p>
        </div>
        <div className="recent-article">
          <Card title="最近文章" bordered={false}>
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
          <Card title="标签" bordered={false}>
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