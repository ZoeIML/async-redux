import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        date={[Date(post.created * 1000)]}
        author={post.author}

      />
      // console.log(new Date(post.created * 1000))
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
