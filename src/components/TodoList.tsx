import { useMemo } from 'react';
import TodoListItem from './TodoListItem';
import { ITodoList, IVisibilityList, IItem } from '../interfaces/interfaces';

function TodoList({ todos, toggleTodo, deleteTodo }: ITodoList) {

  const { activeList, completeList }: IVisibilityList = useMemo(() => {
    const activeList: Array<JSX.Element> = [];
    const completeList: Array<JSX.Element> = [];

    todos.forEach((item: IItem) => {
      const listItem = (
        <TodoListItem 
          key={ item.id } 
          item={ item } 
          onClick={ () => toggleTodo(item.id) } 
          deleteTodo={ deleteTodo } 
        />
      );
  
      (item.isDone ? completeList : activeList).push(listItem)
      
    });

    return { activeList, completeList };

  }, [todos]);

  return (
    <div>
      <ul className='list-group'>
        { activeList }
      </ul>
      <hr />
      <ul className='list-group'>
        { completeList }
      </ul>
    </div>
  )
}

export default TodoList;