// ACTIONS
// list add comment
// list remove comment
// form edit author
// form edit message

export const LIST_ADD_COMMENT = 'list-add-comment'
export const LIST_REMOVE_COMMENT = 'list-remove-comment'
export const FORM_EDIT_AUTHOR = 'form-edit-author'
export const FORM_EDIT_MESSAGE = 'form-edit-message'

export const listAddComment = (author, message) => (
  {
    type: LIST_ADD_COMMENT,
    author,
    message
  }
)

export const listRemoveComment = id => (
  {
    type: LIST_REMOVE_COMMENT,
    id
  }
)

export const formEditAuthor = commentAuthor => (
  {
    type: FORM_EDIT_AUTHOR,
    commentAuthor
  }
)

export const formEditMessage = commentMessage => (
  {
    type: FORM_EDIT_MESSAGE,
    commentMessage
  }
)
