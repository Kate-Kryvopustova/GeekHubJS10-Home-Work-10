import React from 'react';
import { Check2, Circle } from 'react-bootstrap-icons';
import { ITodos, IClickDeleteItem } from '../../interfaces/interfaces'
import styled from 'styled-components';
import {ListGroup} from 'react-bootstrap';

const StyledListItem = styled(ListGroup.Item)`
  &:hover {
    background-color: #F5F5F5;
  }
  .undone {
    color: rgb(0, 172, 219);
  }

  .done {
    color: red;
    text-decoration: line-through;
  }
  cursor: pointer;
`

const StyledCloseButton = styled.button`
  &:hover {
    color: red;
    background: pink;
    border-radius: 5px;
  }
  border: none;
  background-color: inherit;
  float: right;
`

const StyledTaskName = styled.span`
  margin-left: 15px;
`

function TodoListItem({ onClick, item, deleteTodo }: ITodos): JSX.Element {
  const todoClass = item.isDone ? 'done' : 'undone';
  const isDoneItem = item.isDone;

  const onDelete: IClickDeleteItem = (event) => {
    event.stopPropagation();
    deleteTodo(item.id);
  }

  return (
    <StyledListItem onClick={ onClick }>
      <div className={ todoClass }>
        {
          isDoneItem
            ? <Check2 />
            : <Circle />
        }
        <StyledTaskName>{ item.text }</StyledTaskName>

        <StyledCloseButton onClick={ onDelete }>&times;</StyledCloseButton>
      </div>
    </StyledListItem>
  )
}

export default TodoListItem;
