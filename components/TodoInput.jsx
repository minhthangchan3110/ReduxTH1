import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: new Date().getTime(),
      content: inputValue,
      isCompleted: false,
    }));
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;