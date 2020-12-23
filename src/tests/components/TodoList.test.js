import React from 'react'
import { render, cleanup } from "@testing-library/react";
import TodoList from '../../components/TodoList'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
const mockStore = configureStore([])

const store = mockStore({
    todos: [], 
    loading: false
})

afterEach(cleanup);

  test("should display Loading status", async () => {
   
    const TestingComponent = () => (
        <Provider store={store}>
            <TodoList todos={null} />
        </Provider>
    )
    
    const { container } = render(<TestingComponent />);
  
    await expect(container.querySelector('div').textContent).toMatch(
        /Loading/
      );
  
  });

  test("should display todos", async () => {
   
    const TestingComponent = () => (
        <Provider store={store}>
            <TodoList todos={[
                {title: 'easy title', completed: false, id: 1}
            ]} />
        </Provider>
    )
    
    const { container } = render(<TestingComponent />);
  

    await expect(container.querySelector('h1').textContent).toMatch(
        /easy title/
      );
  
  });


