import { combineReducers, createStore } from 'redux'

import commentsReducer from './reducers/comments-reducer.js'

const rootReducer = combineReducers(
  {
    comments: commentsReducer
  }
)

const LOCAL_STORAGE_KEY = 'comments-react-demo-state'

const loadStateFromLS = () => {
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  if (data) {
    return JSON.parse(data)
  } else {
    return undefined
  }
}

const saveStateToLS = state => {
  const data = JSON.stringify(state)
  window.localStorage.setItem(LOCAL_STORAGE_KEY, data)
}

const persistedState = loadStateFromLS()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  const { comments } = store.getState()

  saveStateToLS(
    {
      comments
    }
  )
})

export default store
