import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { setFilter } from './reducers/todoSlice';
const TodoList = () => {
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

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('todo')}>Todo</button>
        <button onClick={() => setFilter('finished')}>Finish</button>
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