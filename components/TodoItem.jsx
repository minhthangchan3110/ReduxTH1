import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from './reducers/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div>
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.text}</span>
      {todo.isCompleted ? (
        <button onClick={handleRemove}>Remove</button>
      ) : (
        <button onClick={handleToggleComplete}>Finish</button>
      )}
    </div>
  );
};

export default TodoItem;
