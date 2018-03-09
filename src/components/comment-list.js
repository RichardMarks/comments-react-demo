import React from 'react'
import PropTypes from 'prop-types'

import Comment from './comment'

const CommentList = props => {
  return (
    <div>
      <h2>{props.comments.length} Comments</h2>
      <ul>
        {
          props.comments.map((comment, i) => (
            <Comment
              key={i}
              comment={comment}
              id={i}
              onRemove={props.onRemoveComment}
            />
          ))
        }
      </ul>
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  onRemoveComment: PropTypes.func
}

export default CommentList
