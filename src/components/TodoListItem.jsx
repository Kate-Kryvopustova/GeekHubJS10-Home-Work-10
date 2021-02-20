import React from 'react';
import { Check2, Circle } from 'react-bootstrap-icons';

function TodoListItem({ onClick, isDone, item, deleteTodo }) {
  const todoClass = item.isDone ? 'done' : 'undone';
  const isDoneItem = item.isDone;
  const svgStyle = { marginLeft: 15 };

  const onDelete = event => {
    event.stopPropagation();
    deleteTodo(item.id)
  }

  return (
    <li className="list-group-item" onClick={onClick}>
      <div className={todoClass}>
        {
          isDoneItem
            ? <Check2 />
            : <Circle />
        }
        <span style={svgStyle}>{item.text}</span>

        <button className='close' onClick={onDelete}>&times;</button>
      </div>
    </li>
  )
}

export default TodoListItem;