import { Check2, Circle } from 'react-bootstrap-icons';
import { ITodos, IClickDeleteItem } from '../interfaces/interfaces'

function TodoListItem({ onClick, item, deleteTodo }: ITodos) {
  const todoClass = item.isDone ? 'done' : 'undone';
  const isDoneItem = item.isDone;
  const svgStyle = { marginLeft: 15 };

  const onDelete: IClickDeleteItem = (event) => {
    event.stopPropagation();
    deleteTodo(item.id);
  }

  return (
    <li className="list-group-item" onClick={ onClick }>
      <div className={ todoClass }>
        {
          isDoneItem
            ? <Check2 />
            : <Circle />
        }
        <span style={ svgStyle }>{ item.text }</span>

        <button className='close' onClick={ onDelete }>&times;</button>
      </div>
    </li>
  )
}

export default TodoListItem;