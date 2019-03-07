import React from 'react'

import { Form, Input, Button } from 'antd';

class createArticle extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入标题' }],
          })(
            <Input addonBefore='标题' placeholder="请输入标题" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('author', {
            rules: [{ required: true, message: '请输入作者' }],
          })(
            <Input  addonBefore='作者' placeholder="请输入作者" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('keyword', {
            rules: [{ required: true, message: '请输入关键字' }],
          })(
            <Input  addonBefore='关键字' placeholder="请输入关键字" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('desc', {
            rules: [{ required: true, message: '请输入描述' }],
          })(
            <Input  addonBefore='描述' placeholder="请输入描述" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('img_url', {
            rules: [{ required: true, message: '请输入封面链接' }],
          })(
            <Input  addonBefore='封面链接' placeholder="请输入封面链接" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const ArticleItem = Form.create({ name: 'normal_login' })(createArticle);

export default ArticleItem
