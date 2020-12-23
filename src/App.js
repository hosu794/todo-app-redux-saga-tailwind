import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoConstants } from './constants';

const App = () => {
  
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)

  const takeAll = useCallback(() => {
    dispatch({type: todoConstants.GET_ALL_TODOS})
  }, [dispatch])

  useEffect(() => {
    takeAll()
  }, [takeAll])
    

  return (
    <div>
      Hello Sagas
      <TodoForm />
     <TodoList todos={todos} />
    </div>
  )
}



export default App;
