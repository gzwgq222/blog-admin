import React, { Component } from 'react'
import './index.less'

import { Divider, Rate, Icon, Card } from 'antd'


class About extends Component {
  state = { commentList: [] }


  render() {
    return (
      <Card bordered={false}>
      <div className="content-inner-wrapper about">
        <Divider orientation="left">博客简述</Divider>
        {/* <p>主要是用来记录博主学习而作！</p> */}
        <p>本博客使用的技术为 react v16.8 + antd + koa2 + mysql</p>
        <p>
          源码地址：
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/gzwgq222/blog-admin">
            github
          </a>
        </p>
        <Divider orientation="left">关于我</Divider>
        <ul className="about-list">
          <li>Gong</li>
          <li>学历专业：本科 医学</li>
          <li>
            联系方式：
            <Icon type="qq" /> 445722156
            <Divider type="vertical" />
            <i className="iconfont icon-email" />
            <a href="mailto:445722156@qq.com">445722156@qq.com</a>
          </li>
          <li>坐标：深圳市</li>
          <li>
            技能
            <ul>
              <li>
                HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
                {/* <Rate defaultValue={3} disabled /> */}
              </li>
              <li>
                react vue 框架：熟练掌握使用！
                {/* <Rate defaultValue={3} disabled /> */}
              </li>
              <li>
                es6：日常开发必备，以及掌握基本面向对象编程实现！
                {/* <Rate defaultValue={3} disabled /> */}
              </li>
              <li>
                webpack: 入门级别，可以对脚手架进行针对性的配置！
                {/* <Rate defaultValue={2} disabled /> */}
              </li>
              <li>
                node mysql：针对需求可以做到简单的数据库设计、接口的开发与设计！
                {/* <Rate defaultValue={2} disabled /> */}
              </li>
            </ul>
          </li>
          <li>
            其他
            <ul>
              <li>常用开发工具： vscode、webstorm、git</li>
              <li>熟悉的 UI 工具： antd、element-ui、vux</li>
              <li>良好的代码习惯： 略微代码洁癖、注释规范 jsdoc</li>
            </ul>
          </li>
          <li>
            个人
            <ul>
              <li>以前吧骑行、跳舞，现在已很久没有动了~~~</li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
    )
  }
}

export default About