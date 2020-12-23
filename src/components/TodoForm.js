import React from 'react';
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import { todoConstants } from '../constants';

const TodoForm = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = async (data) => {

         const request = {
            title: data.title, 
            completed: false, 
        }

        await dispatch({type: todoConstants.CREATE_TODO, payload:request })
        await reset()
    }
 
    return (
        <div className="py-4 bg-white my-7 rounded-full flex justify-center">
        <div className="p-4"> <h1 className="flex-1 text-2xl">Todo Form</h1> </div>
      <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
      <input className="bg-gray-200 focus:bg-white p-2 rounded-lg" type="text" placeholder="Title" name="title" ref={register({required: true, maxLength: 80, minLength: 3})} />
      {errors.title && <span>This field is required</span>}
      {errors.title?.type === "minLength" && "Your input exceed maxLength"}
      <input type="submit" value='Submit' className="text-white mx-3 bg-blue-500 md:bg-green-500 rounded-lg py-3 px-6 ring-4 ring-green-500 ring-opacity-50"/>
 
    </form>
        </div>
    )
}

export default TodoForm;