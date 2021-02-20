import { v4 as uuidv4 } from 'uuid';

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: uuidv4(),
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});