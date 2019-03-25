import { Form, Input, Button, Select } from 'antd'
import React from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './item.less'
import api from '../../../api'

const { Option } = Select

class createArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: [],
      editorState: EditorState.createEmpty()
    }
  }
  componentDidMount () {
    this.getTagList()
  }
  async getTagList () {
   const {data, code} = await api.get('tag/list/all')
   if (code === 1000) this.setState({tag: data})
   console.log(this.state.tag)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const editorContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    console.log(editorContent)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      } 
    })
  }
  handleChangeSelect (val) {
    console.log(val)
  }
  onEditorStateChange (editorState) {
    this.setState({
      editorState
    })
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 5 },
        xxl: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 12 }
      }
    }
    const { getFieldDecorator } = this.props.form
    let optionChildren = this.state.tag.map(tag => {
      return <Option value={tag.id} key={tag.id}>{tag.name}</Option>
    })

    return (
      <Form onSubmit={this.handleSubmit} {...formItemLayout}>
        <Form.Item label='标题'>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入标题' }],
          })(
            <Input placeholder="请输入标题" />
          )}
        </Form.Item>
        <Form.Item label='作者'>
          {getFieldDecorator('author', {
            rules: [{ required: true, message: '请输入作者' }],
          })(
            <Input placeholder="请输入作者" />
          )}
        </Form.Item>
        <Form.Item label='关键字'>
          {getFieldDecorator('keyword', {
            rules: [{ required: true, message: '请输入关键字' }],
          })(
            <Input placeholder="请输入关键字" />
          )}
        </Form.Item>
        <Form.Item label='描述'>
          {getFieldDecorator('desc', {
            rules: [{ required: true, message: '请输入描述' }],
          })(
            <Input placeholder="请输入描述" />
          )}
        </Form.Item>
        <Form.Item label='封面链接'>
          {getFieldDecorator('img_url', {
            rules: [{ required: true, message: '请输入封面链接' }],
          })(
            <Input placeholder="请输入封面链接" />
          )}
        </Form.Item>
        <Form.Item label='标签'>
          {getFieldDecorator('tag', {
            rules: [{ required: true, message: '请选择标签' }],
          })(
          <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="请选择标签"
          addonBefore='标签'
          onChange={this.handleChangeSelect.bind(this)}>
          { optionChildren }
        </Select>
          )}
        </Form.Item>
        <Form.Item label='内容' wrapperCol={{span: 19}}>
          <Editor
            editorState={this.state.editorState}
            editorClassName="editor"
            onEditorStateChange={this.onEditorStateChange.bind(this)}
          />
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
