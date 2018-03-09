import React from 'react'
import PropTypes from 'prop-types'

const Comment = props => {
  return (
    <li>
      <pre>{props.comment.message}</pre>
      <div>by {props.comment.author}</div>
      <div style={{ textAlign: 'right' }}>
        <button onClick={() => props.onRemove && props.onRemove(props.id)}>
          Remove Comment
        </button>
      </div>
    </li>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  id: PropTypes.number,
  onRemove: PropTypes.func
}

export default Comment
