import {all} from 'redux-saga/effects'

import {watchFetchTodos,watchCreateTodo, watchDeleteTodo} from './todo.saga'

export default function* rootSaga() {
    yield all([
        watchFetchTodos(), 
        watchCreateTodo(),
        watchDeleteTodo()
    ])
  }