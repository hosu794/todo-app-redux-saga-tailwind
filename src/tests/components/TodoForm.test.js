import React from 'react'
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import TodoForm from '../../components/TodoForm'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { todoConstants } from '../../constants';
const mockStore = configureStore([])

const store = mockStore({
    todos: [], 
    loading: false
})

const mockValue = "Test@123";
afterEach(cleanup);

const TestingComponent = () => (
    <Provider store={store}>
        <TodoForm />
    </Provider>
)

store.dispatch = jest.fn()

test("should watch input correctly", () => {


    const { container } = render(<TestingComponent />);
  
    const title = container.querySelector(
      "input[name='title']"
    );
    fireEvent.input(title, {
      target: {
        value: mockValue
      }
    });
 
    expect(title.value).toEqual(mockValue);
  });

  test("should display correct error message for password miss match", async () => {
    const { container } = render(<TestingComponent />);
    const title = container.querySelector(
      "input[name='title']"
    );
    
    const submitButton = container.querySelector(
      "input[type='submit']"
    );
    fireEvent.input(title, {
      target: {
        value: null
      }
    });
   
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(container.querySelector('span').textContent).toMatch(
      /This field is required/
    );
  });

  test("Should submit form successfully", async () => {
    const { container } = render(<TestingComponent />);
    const title = container.querySelector(
      "input[name='title']"
    );
    
    const submitButton = container.querySelector(
      "input[type='submit']"
    );
    fireEvent.input(title, {
      target: {
        value: mockValue
      }
    });
   
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      {type: todoConstants.CREATE_TODO, payload: {
          completed: false, 
          title: mockValue
      }}
    );
  });

    

  
