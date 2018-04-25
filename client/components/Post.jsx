import React from 'react'

const Post = (props) => (
  <div>
    <div>{props.title}</div>
    <div>{props.author}</div>
    <div>{props.date}</div>
  </div>
)

export default Post
