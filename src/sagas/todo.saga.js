import {takeLatest, put, call} from 'redux-saga/effects'

import {todoService} from '../services'
import {todoConstants} from '../constants'

export function* fetchTodos() {
    yield put({type: todoConstants.GET_ALL_TODOS_PENDING})

    try {
        const todosFromApi = yield call(todoService.getAllTodos)
        yield put({type: todoConstants.GET_ALL_TODOS_FULFILMENT, payload: todosFromApi.data})
    } catch (error) {
        yield put({type: todoConstants.GET_ALL_TODOS_REJECT, payload: error})        
    }    
}

export function* createTodo(action) {
    yield put({type: todoConstants.CREATE_TODO_PENDING})

    try {
        const newTodo = yield call(todoService.createTodo, action.payload)
        yield put({type: todoConstants.CREATE_TODO_FULFILMENT, payload: newTodo.data})
    } catch(error) {
        yield put({type: todoConstants.CREATE_TODO_REJECT, payload: error})
    }
}

export function* deleleTodo(action) {
    yield put({type: todoConstants.DELETE_TODO_PENDING})

    try {
        yield call(todoService.deleteTodo, action.payload)
        yield put({type: todoConstants.DELETE_TODO_FULFILMENT, payload: action.payload})
    } catch (error) {
        yield put({type: todoConstants.DELETE_TODO_REJECT, payload: error})
    }
}

export function* watchDeleteTodo() {
    yield takeLatest(todoConstants.DELETE_TODO, deleleTodo)
}

export function* watchCreateTodo() {
    yield takeLatest(todoConstants.CREATE_TODO, createTodo)
}


export function* watchFetchTodos() {
    yield takeLatest(todoConstants.GET_ALL_TODOS, fetchTodos)
}