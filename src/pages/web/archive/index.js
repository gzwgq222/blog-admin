import React, {Component} from 'react'
import { Timeline, Icon, Card } from 'antd'
import api from '../../../api'
import { Link } from 'react-router-dom'

class Archive extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    this.getArticleList()
  }
  async getArticleList () {
    const { data, code } = await api.get('/article/list/all')
    code === 1000 && this.setState({data})
  }
  render () {
    const itemMap = this.state.data.map((v, i) => {
      return <Timeline.Item key={i}>
        <Link to={`/web/detail/${v.id}`}>
          <span className='mr20'>{v.createdAt.slice(0, 10)}</span>
          <span>{v.title}</span>
        </Link>
      </Timeline.Item>
    })
    return <Card bordered={false}>
      <Timeline>
        <Timeline.Item dot={<Icon type="clock-circle-o" />} color="red" style={{lineHeight:'20px'}}><span style={{fontSize:'20px'}}>2019</span></Timeline.Item>
        { itemMap }
      </Timeline>
    </Card>
  }
}

export default Archive