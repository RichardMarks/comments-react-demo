import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'

import registerServiceWorker from './registerServiceWorker'

import Page from './pages/comments-page'

const LOCAL_STORAGE_KEY = 'comments-react-demo-state'

class App extends Component {
  constructor (props) {
    super(props)

    this.onCommentsFormAuthorChange = this.onCommentsFormAuthorChange.bind(this)
    this.onCommentsFormMessageChange = this.onCommentsFormMessageChange.bind(this)
    this.onCommentsFormSubmit = this.onCommentsFormSubmit.bind(this)
    this.onRemoveComment = this.onRemoveComment.bind(this)
    this.loadStateFromLS = this.loadStateFromLS.bind(this)
    this.saveStateToLS = this.saveStateToLS.bind(this)
    this.setStateWithPersistence = this.setStateWithPersistence.bind(this)

    this.state = this.loadStateFromLS() || {
      comments: [
        {
          author: 'dev',
          message: 'test'
        }
      ],
      commentAuthor: '',
      commentMessage: ''
    }
  }

  loadStateFromLS () {
    const data = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (data) {
      return JSON.parse(data)
    } else {
      return undefined
    }
  }

  saveStateToLS () {
    const data = JSON.stringify(this.state)
    window.localStorage.setItem(LOCAL_STORAGE_KEY, data)
  }

  setStateWithPersistence (nextState) {
    this.setState(nextState, this.saveStateToLS)
  }

  onCommentsFormAuthorChange (event) {
    this.setStateWithPersistence(
      {
        commentAuthor: event.target.value
      }
    )
  }

  onCommentsFormMessageChange (event) {
    this.setStateWithPersistence(
      {
        commentMessage: event.target.value
      }
    )
  }

  onCommentsFormSubmit (event) {
    event.preventDefault()

    const comments = this.state.comments.slice()

    const comment = {
      author: this.state.commentAuthor,
      message: this.state.commentMessage
    }

    comments.push(comment)

    this.setStateWithPersistence(
      {
        comments,
        commentAuthor: '',
        commentMessage: ''
      }
    )
  }

  onRemoveComment (id) {
    const comments = this.state.comments.filter((comment, i) => i !== id)

    this.setStateWithPersistence(
      {
        comments
      }
    )
  }

  render () {
    return (
      <Page
        comments={this.state.comments}
        commentAuthor={this.state.commentAuthor}
        commentMessage={this.state.commentMessage}
        onCommentsFormAuthorChange={this.onCommentsFormAuthorChange}
        onCommentsFormMessageChange={this.onCommentsFormMessageChange}
        onCommentsFormSubmit={this.onCommentsFormSubmit}
        onRemoveComment={this.onRemoveComment}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
