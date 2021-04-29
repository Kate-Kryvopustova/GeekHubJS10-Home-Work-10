import React from 'react';
import AddTodo from "../Todo/components/AddTodo";
import TodoList from "../Todo/components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from '../store/action';
import { IState, IStyledComponent } from '../interfaces/interfaces';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: cursive;
`



function Todo({ className }: IStyledComponent): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos);

  const onToggle = (id: string) => dispatch(toggleTodo(id));
  const onDelete = (id: string) => dispatch(deleteTodo(id));

  return (
      <div className={ className }>
        <Title className='title'>Todo list</Title>
        <AddTodo />
        <TodoList
            todos={ todos }
            toggleTodo={ onToggle }
            deleteTodo={ onDelete }
        />
      </div>
  );
}

export default Todo;
