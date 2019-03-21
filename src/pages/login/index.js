import React from 'react'

class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleClick () {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className='login'>
        <p onClick={this.handleClick.bind(this)}>to home</p>
      </div>
    )
  }
}
export default Article