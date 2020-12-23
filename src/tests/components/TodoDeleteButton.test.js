import React from 'react'
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import TodoDeleteButton from '../../components/TodoDeleteButton'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
const mockStore = configureStore([])

const store = mockStore({
    todos: [], 
    loading: false
})

afterEach(cleanup);

const mockFunc = jest.fn()

const TestingComponent = () => (
    <Provider store={store}>
        <TodoDeleteButton onClick={mockFunc} />
    </Provider>
)

  test("should display correct error message for password miss match", async () => {
    const { container } = render(<TestingComponent />);
    const button = container.querySelector(
      "button"
    );

    await act(async () => {
        fireEvent.click(button)
    });
    

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });


