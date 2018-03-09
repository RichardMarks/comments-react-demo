import {
  LIST_ADD_COMMENT,
  LIST_REMOVE_COMMENT,
  FORM_EDIT_AUTHOR,
  FORM_EDIT_MESSAGE
} from '../actions/comments-actions'

const initialState = {
  comments: [
    {
      author: 'dev',
      message: 'test'
    }
  ],
  commentAuthor: '',
  commentMessage: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ADD_COMMENT: {
      const nextState = {...state}
      nextState.comments = nextState.comments.slice()
      nextState.comments.push(
        {
          author: action.author,
          message: action.message
        }
      )
      nextState.commentAuthor = ''
      nextState.commentMessage = ''
      return nextState
    }

    case LIST_REMOVE_COMMENT: {
      const nextState = {...state}
      nextState.comments = nextState.comments.filter((comment, i) => i !== action.id)
      return nextState
    }

    case FORM_EDIT_AUTHOR: {
      const nextState = {...state}
      nextState.commentAuthor = action.commentAuthor
      return nextState
    }

    case FORM_EDIT_MESSAGE: {
      const nextState = {...state}
      nextState.commentMessage = action.commentMessage
      return nextState
    }

    default:
      return state
  }
}

export default reducer
