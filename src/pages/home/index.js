import React from 'react'

class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleClick () {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className='login'>
        <p onClick={this.handleClick.bind(this)}>to login</p>
      </div>
    )
  }
}
export default Article