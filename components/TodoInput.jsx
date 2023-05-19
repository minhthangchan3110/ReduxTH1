import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text,
        isCompleted: false,
      }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
