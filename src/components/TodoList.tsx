import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todos, toggleTodo, deleteTodo }: any) {
  const activeList: any = [];
  const completeList: any = [];

  todos.forEach((item: any) => {
    const listItem = <TodoListItem key={item.id} item={item} onClick={() => toggleTodo(item.id)} deleteTodo={deleteTodo} />;

    if (item.isDone) {
      return completeList.push(listItem)
    } else {
      return activeList.push(listItem)
    }
  });

  return (
    <div>
      <ul className='list-group'>
        {activeList}
      </ul>
      <hr />
      <ul className='list-group'>
        {completeList}
      </ul>
    </div>
  )
}

export default TodoList;