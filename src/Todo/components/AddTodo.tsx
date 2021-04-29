import React, { useState, useRef } from 'react';
import { addTodo } from '../../store/action';
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import { IOnChangeInput, IHandleSubmit } from '../../interfaces/interfaces';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledButton = styled(Button)`
  width: 150px;
  margin-left: 15px;
`
const StyledInput = styled.input`
  font-style: italic;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`

function AddTodo(): JSX.Element {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const taskNameInput = useRef<HTMLDivElement>(null);

  const onChange: IOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit: IHandleSubmit = (event) => {
    event.preventDefault();

    if (taskNameInput.current !== null) {
      taskNameInput.current.focus();
    }

    if (!name?.trim()) {
      setName('');
      return;
    }
    dispatch(addTodo(name));
    setName('');
  };

  return (
    <StyledForm
      onSubmit={ handleSubmit }
    >
      <StyledInput
        type='text'
        placeholder='add a new task...'
        onChange={ onChange } 
        value={ name }
        ref={ taskNameInput as never }
      />
      <StyledButton variant='outline-secondary' type='submit'>Add task</StyledButton>
    </StyledForm>
  )
}

export default AddTodo;
