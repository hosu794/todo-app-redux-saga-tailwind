import React from 'react'
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import TodoItem from '../../components/TodoItem'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { todoConstants } from '../../constants';
const mockStore = configureStore([])

const store = mockStore({
    todos: [], 
    loading: false
})


afterEach(cleanup);

const TestingComponent = () => (
    <Provider store={store}>
        <TodoItem completed={true} id={1} title="Some title" key={1} />
    </Provider>
)

store.dispatch = jest.fn()

test("should display correct error message for password miss match", async () => {
    const { container } = render(<TestingComponent />);

      const header = container.querySelector(
        "h1"
      );
  
      await act(async () => {
          fireEvent.click(header)
      });
  
      expect(container.querySelector('h1').textContent).toMatch(
        /Some title/
      );
      expect(container.querySelector('h1')).toHaveAttribute("style", `text-decoration: line-through;`);
      expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

