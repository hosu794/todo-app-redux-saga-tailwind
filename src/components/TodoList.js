import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {

    function deleteTodo() {}

    function handleChange() {}

    return(
            <div class="space-y-4 flex flex-col justify-center">
            {todos ? todos.map(item => <TodoItem  key={item.id} id={item.id} title={item.title} completed={item.completed} />) : 'Loading'}
            </div> 
    )
}

export default TodoList