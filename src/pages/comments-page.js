import React from 'react'
import PropTypes from 'prop-types'

import CommentList from '../components/comment-list'
import CommentsForm from '../components/comments-form'

const Page = props => {
  return (
    <div>
      <h1>Comments</h1>
      <CommentsForm
        commentAuthor={props.commentAuthor}
        commentMessage={props.commentMessage}
        onAuthorChange={props.onCommentsFormAuthorChange}
        onMessageChange={props.onCommentsFormMessageChange}
        onSubmit={props.onCommentsFormSubmit}
      />
      <CommentList
        comments={props.comments}
        onRemoveComment={props.onRemoveComment}
      />
    </div>
  )
}

Page.propTypes = {
  comments: PropTypes.array.isRequired,
  commentAuthor: PropTypes.string,
  commentMessage: PropTypes.string,
  onCommentsFormAuthorChange: PropTypes.func,
  onCommentsFormMessageChange: PropTypes.func,
  onCommentsFormSubmit: PropTypes.func,
  onRemoveComment: PropTypes.func
}

export default Page
