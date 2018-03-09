import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Page from '../pages/comments-page'

import {
  listAddComment,
  listRemoveComment,
  formEditAuthor,
  formEditMessage
} from '../redux/actions/comments-actions'

const CommentsContainer = props => {
  return (
    <Page
      comments={props.comments}
      commentAuthor={props.commentAuthor}
      commentMessage={props.commentMessage}
      onCommentsFormAuthorChange={props.onCommentsFormAuthorChange}
      onCommentsFormMessageChange={props.onCommentsFormMessageChange}
      onCommentsFormSubmit={props.onCommentsFormSubmit}
      onRemoveComment={props.onRemoveComment}
    />
  )
}

CommentsContainer.propTypes = {
  comments: PropTypes.array,
  commentAuthor: PropTypes.string,
  commentMessage: PropTypes.string,
  onCommentsFormAuthorChange: PropTypes.func,
  onCommentsFormMessageChange: PropTypes.func,
  onCommentsFormSubmit: PropTypes.func,
  onRemoveComment: PropTypes.func
}

const mapStateToProps = state => {
  const {
    comments,
    commentAuthor,
    commentMessage
  } = state.comments

  const props = {
    comments,
    commentAuthor,
    commentMessage
  }

  return props
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const props = {
    onCommentsFormAuthorChange (event) {
      dispatch(formEditAuthor(event.target.value))
    },

    onCommentsFormMessageChange (event) {
      dispatch(formEditMessage(event.target.value))
    },

    onCommentsFormSubmit (author, message) {
      dispatch(listAddComment(author, message))
    },

    onRemoveComment (id) {
      dispatch(listRemoveComment(id))
    }
  }

  return props
}

const container = connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)

export default container
