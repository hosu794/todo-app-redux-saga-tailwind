import { todoConstants } from '../../constants';
import todos from '../../reducers/todo.reducer'

const mockDate = [{message: 'some data'}, {message: 'another data'}]
const mockError = new Error("todo error :)")

test("should return initial state", async () => {
  
   expect(todos(undefined, {})).toEqual({
       todos: [], loading: false
   })
  });

  test("should return state after GET_ALL_TODOS_PENDING action", async () => {
      expect(todos(undefined, {
          type: todoConstants.GET_ALL_TODOS_PENDING
      })).toEqual({
          todos: [], loading: true
      })
  })

  test("should return state after GET_ALL_TODOS_FULFILLMENT action", async () => {
    
    expect(todos(undefined, {
        type: todoConstants.GET_ALL_TODOS_FULFILMENT, payload: mockDate 
    })).toEqual({
        todos: [...mockDate], loading: false
    })
})

test("should return state after GET_ALL_TODOS_REJECT action", async () => {
    expect(todos(undefined, {
        type: todoConstants.GET_ALL_TODOS_REJECT, payload: mockError 
    })).toEqual({
        todos: [], loading: false, error: mockError
    })
})