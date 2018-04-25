import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (e) {
    e.preventDefault()
    this.setState({
      subreddit: e.currentTarget.value
    })
  }
  render () {
    return (
      <div>
        <p>Enter your search criteria (without spaces)</p>
        <input onChange={this.handleOnChange}></input>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
        </button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
