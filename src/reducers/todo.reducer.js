import {todoConstants} from '../constants'
import { reverseComplete } from '../utils'

const initialState = {todos: [], loading: false}

function todos(state = initialState, action) {
    switch (action.type) {
        case todoConstants.GET_ALL_TODOS_PENDING:
            return {
                ...state, 
                loading: true,
            }
        case todoConstants.GET_ALL_TODOS_FULFILMENT:
            return {
                ...state, 
                loading: false,
                todos: [...action.payload]
            }
        case todoConstants.GET_ALL_TODOS_REJECT: 
            return {
                ...state, 
                loading: false, 
                error: action.payload
            }
        case todoConstants.CHANGE_COMPLETE:
            return {
                ...state, 
                todos: state.todos.map(item => item.id === action.payload ? reverseComplete(item) : item)
            }
        case todoConstants.CREATE_TODO_PENDING: 
            return {
                ...state, 
                loading: false
            }
        case todoConstants.CREATE_TODO_FULFILMENT: 
            return {
                ...state, 
                loading: false, 
                todos: [...state.todos, action.payload]
            }
        case todoConstants.CREATE_TODO_REJECT: 
            return {
                ...state, 
                error: action.payload
            }
        case todoConstants.DELETE_TODO_PENDING: 
            return {
                ...state, 
                loading: true
            }
        case todoConstants.DELETE_TODO_FULFILMENT: 
        return {
                ...state, 
                loading: false, 
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case todoConstants.DELETE_TODO_REJECT: 
            return {
                ...state, 
                loading: false, 
                error: action.payload
            }
        default:
            return state;
    }
}

export default todos;