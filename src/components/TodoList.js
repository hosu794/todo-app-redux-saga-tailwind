import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {

    function deleteTodo() {}

    function handleChange() {}

    return(
        <React.Fragment>
            {todos ? todos.map(item => <TodoItem  key={item.id} id={item.id} title={item.title} completed={item.completed} />) : 'Loading'}
        </React.Fragment>
    )
}

export default TodoList