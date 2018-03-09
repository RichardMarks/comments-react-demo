import React from 'react'
import PropTypes from 'prop-types'

const CommentsForm = props => {
  return (
    <form>
      <div>
        <label>Name: </label>
        <input
          placeholder='who are you?'
          onChange={props.onAuthorChange}
          value={props.commentAuthor}
        />
      </div>
      <label>Your Comments:</label>
      <div>
        <textarea
          rows={10}
          columns={80}
          placeholder='say something...'
          onChange={props.onMessageChange}
          value={props.commentMessage}
        />
      </div>
      <button onClick={props.onSubmit}>Leave comment</button>
    </form>
  )
}

CommentsForm.propTypes = {
  commentAuthor: PropTypes.string,
  commentMessage: PropTypes.string,
  onAuthorChange: PropTypes.func,
  onMessageChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default CommentsForm
