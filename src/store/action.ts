import { v4 as uuidv4 } from 'uuid';
import { IActionAddTodo, IChangeTodoList } from '../interfaces/interfaces';

export const addTodo = (text: string): IActionAddTodo => ({
    type: 'ADD_TODO',
    id: uuidv4(),
    text
});

export const toggleTodo = (id: string): IChangeTodoList => ({
    type: 'TOGGLE_TODO',
    id
});

export const deleteTodo = (id: string): IChangeTodoList => ({
    type: 'DELETE_TODO',
    id
});
