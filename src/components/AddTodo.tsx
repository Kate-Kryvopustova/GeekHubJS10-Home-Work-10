import { useState } from 'react';
import { addTodo } from '../actions';
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import { IOnChangeInput, IHandleSubmit } from '../interfaces/interfaces';

function AddTodo() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');

  const onChange: IOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit: IHandleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;
    dispatch(addTodo(name));
    setName('');
  };

  return (
    <form 
      className='form-inline'
      onSubmit={ handleSubmit }
    >
      <input 
        className='form-control'
        type='text'
        placeholder='add a new task...'
        onChange={ onChange } 
        value={ name }
      />
      <Button variant='outline-secondary' type='submit'>Add task</Button>
    </form>
  )
}

export default AddTodo;