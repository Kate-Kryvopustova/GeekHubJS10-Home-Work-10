import React from 'react';
import TodoListItem from './TodoListItem';
import { ITodoList, IItem } from '../../interfaces/interfaces';
import styled from 'styled-components';
import {ListGroup} from 'react-bootstrap';

const StyledListGroup = styled(ListGroup)`
  width: 600px
`

function TodoList({ todos, toggleTodo, deleteTodo }: ITodoList): JSX.Element {
  const renderItem = (item: IItem) => (
    <TodoListItem
      key={ item.id }
      item={ item }
      onClick={ () => toggleTodo(item.id) }
      deleteTodo={ deleteTodo }
    />
  );

  return (
    <div>
      <StyledListGroup>
        { todos.map((item) => !item.isDone && renderItem(item)) }
      </StyledListGroup>
      <hr/>
      <StyledListGroup>
        { todos.map((item) => item.isDone && renderItem(item)) }
      </StyledListGroup>
    </div>
  );
}

export default TodoList;
