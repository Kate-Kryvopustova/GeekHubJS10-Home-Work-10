import React, { useState } from 'react';
import { addTodo } from '../actions';
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';

function AddTodo() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const onChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;
    dispatch(addTodo(name))
    setName('');
  }

  return (
    <form 
      className='form-inline'
      onSubmit={handleSubmit}
    >
      <input 
        className='form-control'
        type='text'
        placeholder='add a new task...'
        onChange={onChange} 
        value={name}
      />
      <Button variant='outline-secondary' type='submit'>Add task</Button>
    </form>
  )
}

export default AddTodo;