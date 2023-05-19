import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { setFilter } from './reducers/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const filter = useSelector((state) => state.todos.filter);

  const filteredTodos = () => {
    switch (filter) {
      case 'todo':
        return todos.filter((todo) => !todo.isCompleted);
      case 'finished':
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };

  const handleFilterChange = (selectedFilter) => {
    dispatch(setFilter(selectedFilter));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('todo')}>Todo</button>
        <button onClick={() => handleFilterChange('finished')}>Finish</button>
      </div>
      <ul>
        {filteredTodos().map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
