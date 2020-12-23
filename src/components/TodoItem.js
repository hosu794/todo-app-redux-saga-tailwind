import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {todoConstants} from '../constants'
import TodoDeleteButton from './TodoDeleteButton'

const TodoItem = ({id, title, completed}) => {

    const deleteLine = {textDecoration: 'line-through'}
    const isChecked = completed ? deleteLine : {}

    const dispatch = useDispatch()

    const onComplete = useCallback(() => {
        dispatch({type: todoConstants.CHANGE_COMPLETE, payload: id})
    }, [dispatch, id])

    const handleDelete = () => {
        dispatch({type: todoConstants.DELETE_TODO, payload: id})
    }

    return(
        <div className="relative py-6 shadow-2xl bg-white rounded-full flex flex-row items-center">
        <h1 className="mx-5 text-lg" onClick={onComplete} style={isChecked}>{title}</h1>
        <TodoDeleteButton onClick={handleDelete} />
        </div>
    )
}

export default TodoItem