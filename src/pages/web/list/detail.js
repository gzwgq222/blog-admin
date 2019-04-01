import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import { EditorState, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'
import api from '../../../api'
import './detail.less'

class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      data: {
        title: '',
        tag: [],
        category: []
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

    // const tag = data.tag.map(v => {
    //   return <span key={v}>
    //     <Tag color={color[Math.floor(Math.random()*color.length)]}>{ v }</Tag>
    //   </span>
    // })

    // const category = data.category.map(v => {
    //   return <span key={v}>
    //     <Tag color={color[Math.floor(Math.random()*color.length)]}>{ v }</Tag>
    //   </span>
    // })
    const extra = <div className='content-extra'>
      {/* <Icon type='tags-o' style={{ marginRight: 8 }} />
      { tag }
      <Icon type='folder' style={{ marginRight: 8 }} />
      { category } */}
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