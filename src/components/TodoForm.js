import React from 'react';
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import { todoConstants } from '../constants';

const TodoForm = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        const request = {
            title: data.title, 
            completed: false, 
        }
        dispatch({type: todoConstants.CREATE_TODO, payload:request })
    }
 
    return (
        <div>
    <h1>Todo Form</h1> 
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" name="title" ref={register({required: true, maxLength: 80, minLength: 3})} />
      {errors.title && <span>This field is required</span>}
      {errors.title?.type === "minLength" && "Your input exceed maxLength"}
      <input type="submit" />
 
    </form>
        </div>
    )
}

export default TodoForm;