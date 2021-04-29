export interface IOnChangeInput {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface IHandleSubmit {
  (event: React.FormEvent<EventTarget>): void;
}

export interface IVisibilityList {
  activeList: Array<JSX.Element>,
  completeList: Array<JSX.Element>
}

export interface ITodoList {
  todos: Array<IItem>,
  toggleTodo: IToggleTodo,
  deleteTodo: IDeleteTodo
}

export interface IToggleTodo {
  (id: string ) : void
}

export interface IDeleteTodo {
  (id: string ) : void
}

export interface ITodos {
  onClick: IClickDeleteItem,
  item: IItem,
  deleteTodo: IDeleteTodo
}

export interface IClickDeleteItem {
  (event: React.FormEvent<EventTarget> ) : void
}

export interface IItem {
  id: string,
  text: string,
  isDone: boolean
}

export interface IActionAddTodo {
  type: string,
  id: string,
  text: string
}

export interface IChangeTodoList {
  type: string,
  id: string
}

export type IState =  {
  todos: IItem[]
}

export interface IStyledComponent {
  className?: string
}

