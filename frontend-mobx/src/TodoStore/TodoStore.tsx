import { action, makeObservable, observable } from 'mobx';
import { nanoid } from 'nanoid';

export interface ItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const InitialProps: ItemProps[] = [
  { id: '0', text: 'Push-ups * 100', completed: false },
  { id: '1', text: 'Pull-ups * 42', completed: false },
];

export class TodoStore {
  static store: TodoStore;

  TodoList: ItemProps[];

  constructor() {
    makeObservable(this, {
      TodoList: observable,
      addTodo: action,
      removeTodo: action,
      toggleTodo: action,
    });
    this.TodoList = InitialProps;
  }

  static get Store(): TodoStore {
    if (!this.store) this.store = new TodoStore();
    return this.store;
  }

  addTodo(text: string): void {
    const item: ItemProps = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.TodoList.push(item);
  }

  removeTodo(id: string): void {
    const index = this.TodoList.findIndex(item => item.id === id);
    this.TodoList.splice(index, 1);
  }

  toggleTodo(id: string): void {
    const index = this.TodoList.findIndex(item => item.id === id);
    this.TodoList[index].completed = !this.TodoList[index].completed;
  }
}

export default TodoStore;
