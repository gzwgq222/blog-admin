import React, { Component } from 'react'
import './index.less'

import { Divider, Rate, Icon, Card } from 'antd'


class About extends Component {
  state = { commentList: [] }


  render() {
    return (
      <Card bordered={false}>
      <div className="content-inner-wrapper about">
        <Divider orientation="left">关于博客</Divider>
        <p>一直在用 vue 写业务，用 react 的机会比较少，一直也想转 react，故选用了 react 这套技术栈</p>
        <p>前端：react + antd + es6 + webpack + axios</p>
        <p>服务端：koa2 + sequelize + mysql</p>
        <p>
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/gzwgq222/blog-admin">
            源码戳这里 ~
          </a>
        </p>
        <Divider orientation="left">关于我</Divider>
        <ul className="about-list">
          <li>Gong Qiang</li>
          <li>
            联系方式：
            <a href="#">18174352598</a>
            <Divider type="vertical" />
            <i className="iconfont icon-email" />
            <a href="mailto:445722156@qq.com">445722156@qq.com</a>
          </li>
          <li>坐标：深圳市</li>
          <li>学历专业：本科<Divider type="vertical" />医学</li>
          <li>
            技能
            <ul>
              <li>
               前端：Vue、React、ES6/7/8
              </li>
              <li>
                服务端：Node、Koa2、
              </li>
              <li>
                数据库：Mysql
              </li>
              <li>
                工具：webpack、git
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
    )
  }
}

export default About