import React, {Component} from 'react'
import { Timeline, Icon, Card } from 'antd'

class Archive extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return <Card bordered={false}>
      <Timeline>
        <Timeline.Item dot={<Icon type="clock-circle-o" />} color="red" style={{lineHeight:'20px'}}><span style={{fontSize:'20px'}}>2019</span></Timeline.Item>
        <Timeline.Item>2015-09-01 数组去重</Timeline.Item>
        <Timeline.Item>2015-09-01 this</Timeline.Item>
        <Timeline.Item>2015-09-01 初探react</Timeline.Item>
      </Timeline>
    </Card>
  }
}

export default Archive