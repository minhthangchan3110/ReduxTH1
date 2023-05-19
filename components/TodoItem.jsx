import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from './reducers/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div>
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.content}</span>
      {todo.isCompleted ? (
        <button onClick={handleRemoveTodo}>Remove</button>
      ) : (
        <button onClick={handleToggleComplete}>Finish</button>
      )}
    </div>
  );
};

export default TodoItem;