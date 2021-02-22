import TodoListItem from './TodoListItem';

interface Itest {
  id: string ,
  text: string,
  isDone: boolean
}

interface ItoggleTodo {
  (id: string ) : void
}

interface IdeleteTodo {
  (id: string ) : void
}

interface Itodos {
  todos: Array<Itest>,
  toggleTodo: ItoggleTodo,
  deleteTodo: IdeleteTodo
}

function TodoList({ todos, toggleTodo, deleteTodo }: Itodos) {
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