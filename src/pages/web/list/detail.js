import React, { Component } from 'react'

class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    const id = this.props.match.params.id
  }
  render () {
    return (
      <div>item</div> 
    )
  }
}

export default ArticleDetail