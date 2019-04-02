import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import { EditorState, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import api from '../../../api'
import './detail.less'

class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      data: {
        title: ''
      },
      editorState: EditorState.createEmpty()
    }
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id
    const preId = this.props.match.params.id
    id !== preId && this.getDetail(id)
  }
  componentDidMount () {
    const id = this.props.match.params.id
    this.getDetail(id)
  }
  async getDetail (id) {
    const {data} = await api.get('/article/detail', {id})
    this.setState({data})
    const { content } = data
    const contentBlock = htmlToDraft(content)
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
    const editorState = EditorState.createWithContent(contentState)
    this.setState({ editorState })
  }
  render () {
    const { data } = this.state

    const extra = <div className='content-extra'>
      <Icon type='calendar' style={{ marginRight: 8 }} />
      { data.createdAt }
      <Icon type="eye" style={{ marginRight: 8, marginLeft: 8 }} />
      { data.readedCount } 次预览
    </div>

    return (
      <div>
        <Card
        title={data.title}
        extra={extra}
        >
          <Editor
          readOnly
          toolbarHidden
          editorState={this.state.editorState}
          editorClassName="editor"
          />
        </Card>
      </div> 
    )
  }
}

export default ArticleDetail