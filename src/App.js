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
    <div className="bg-yellow-300 font-mono">
    <div className="md:container md:mx-auto">
     <h1 className='text-white antialiased font-semibold tracking-wide py-5 text-center text-4xl'>Todo list with redux saga</h1>
      <TodoForm />
     <TodoList todos={todos} />
    </div>
    </div>
  )
}



export default App;
