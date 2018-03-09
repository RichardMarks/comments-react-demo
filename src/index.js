import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'

import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'

import store from './redux/store'

import CommentsContainer from './containers/comments-container'

const App = () => {
  return (
    <Provider store={store}>
      <CommentsContainer />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
