import React from 'react'

class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    console.log(1, this.props)
  }
  handleClick () {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div>
        <p onClick={this.handleClick.bind(this)}>home</p>
      </div>
    )
  }
}
export default Article