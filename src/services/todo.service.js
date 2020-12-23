import axios from 'axios'

import {apiConstants} from '../constants'

export const todoService = {
deleteTodo, getAllTodos, createTodo
}

    function createTodo(payload) {
        const body =JSON.stringify(payload)

        return axios.post(`${apiConstants.URL}/todos`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

 function getAllTodos() {
     return axios.get(`${apiConstants.URL}/todos`, {
         headers: {
             'Content-Type': 'application/json'
         }
     })
 }

 function deleteTodo(payload) {
     return axios.delete(`${apiConstants.URL}/todos/${payload}`, {
         headers: {
             'Content-Type': 'application/json'
         }
     })
 }