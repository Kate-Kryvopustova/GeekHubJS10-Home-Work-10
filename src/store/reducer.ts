import { combineReducers } from "redux";

const initialState = [
  {
    id: 'Learn JS',
    text: 'Learn JS',
    isDone: true
  },
  {
    id: 'Learn React',
    text: 'Learn React',
    isDone: true
  },
  {
    id: 'Learn Angular',
    text: 'Learn Angular',
    isDone: false
  }
]

const todos = (state = initialState, action: any): any => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, 
        {
          id: action.id,
          text: action.text,
          isDone: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE_TODO':
      return state.filter(item => 
        item.id !== action.id
      );
    default:
      return state;
  }
}

export default combineReducers({ todos });
