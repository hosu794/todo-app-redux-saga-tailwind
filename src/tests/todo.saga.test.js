import { todoConstants } from '../constants';
import { fetchTodos, createTodo, deleleTodo } from '../sagas/todo.saga';

import { runSaga } from 'redux-saga';
import {todoService} from '../services';

describe('fetchTodos', () => {
  it('should call api and dispatch fulfillment action', async () => {
    const dummyAuthors = {
      data: [{ name: 'JK Rowling' }, { name: 'Tolkien' }]
    };
    const requestAuthors = jest.spyOn(todoService, 'getAllTodos')
      .mockImplementation(() => Promise.resolve(dummyAuthors));
    const dispatched = [];
     await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchTodos);

    expect(requestAuthors).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{type: todoConstants.GET_ALL_TODOS_PENDING}, {type: todoConstants.GET_ALL_TODOS_FULFILMENT, payload: dummyAuthors.data}]);
    requestAuthors.mockClear();
  });

  it('should call api dispatch reject action', async () => {

    const dummyError = new Error('Cannot get todos!')

    const requestError = jest.spyOn(todoService, 'getAllTodos')
      .mockImplementation(() => Promise.reject(dummyError))

    const dispatched = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action)
    }, fetchTodos)

    expect(requestError).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{type: todoConstants.GET_ALL_TODOS_PENDING}, {type: todoConstants.GET_ALL_TODOS_REJECT, payload: dummyError}]);
    requestError.mockClear();

  })

});


describe('craeteTodo', () => {

  it('should call api dispatch fulfillment action', async () => {

    const dummyAuthor = {
      data: { name: 'Tolkien' }
    };

    const requestAuthor = jest.spyOn(todoService, 'createTodo')
      .mockImplementation(() => Promise.resolve(dummyAuthor))

    const dispatched = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action)
    }, createTodo, {payload: dummyAuthor})

    expect(requestAuthor).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{type: todoConstants.CREATE_TODO_PENDING}, {type: todoConstants.CREATE_TODO_FULFILMENT, payload: dummyAuthor.data}]);
    requestAuthor.mockClear();

  })

  it('should call api dispatch reject action', async () => {

    const dummyAuthor = {
      data: { name: 'Tolkien' }
    };

    const dummyError = new Error('some stupid error')

    const requestError = jest.spyOn(todoService, 'createTodo')
      .mockImplementation(() => Promise.reject(dummyError))

    const dispatched = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action)
    }, createTodo, {payload: dummyAuthor})

    expect(requestError).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{type: todoConstants.CREATE_TODO_PENDING}, {type: todoConstants.CREATE_TODO_REJECT, payload: dummyError}]);
    requestError.mockClear();

  })

});

describe('deleleTodo',  () => {

    it('should call api dispatch fulfillment action', async () => {

    const dummyIndex = 12;

    const requestIndex = jest.spyOn(todoService, 'deleteTodo')
      .mockImplementation(() => Promise.resolve(dummyIndex))

    const dispatched = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action)
    }, deleleTodo, {payload: dummyIndex})

    expect(requestIndex).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{type: todoConstants.DELETE_TODO_PENDING}, {type: todoConstants.DELETE_TODO_FULFILMENT, payload: dummyIndex}]);
    requestIndex.mockClear();

  })

  it("should call api dispatch reject action", async () => {


    const dummyIndex = 12;
    const mockError = new Error("Some error")

    const requestError = jest.spyOn(todoService, "deleteTodo").mockImplementation(() => Promise.reject(mockError))

    const dispatched = []

    await runSaga({
      dispatch: (action) => dispatched.push(action)
    }, deleleTodo, {payload: dummyIndex})

    expect(requestError).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{type: todoConstants.DELETE_TODO_PENDING}, {type: todoConstants.DELETE_TODO_REJECT, payload: mockError}]);
    requestError.mockClear();

  })

});