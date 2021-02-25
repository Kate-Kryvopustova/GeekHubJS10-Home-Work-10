import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from './actions/index';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const onToggle = id => dispatch(toggleTodo(id)); 
  const onDelete = id => dispatch(deleteTodo(id));
  
  return (
    <div id='main'>
      <h1 className='title'>Todo list</h1>
        <AddTodo />
        <TodoList 
          todos={ todos }
          toggleTodo={ onToggle }
          deleteTodo={ onDelete }
        />
    </div>
  );
}

export default App;
