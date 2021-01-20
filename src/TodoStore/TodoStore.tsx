import { action, computed, makeObservable, observable } from 'mobx';
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

  TodoList = InitialProps;

  static getTodoList: unknown;

  constructor() {
    makeObservable(this, {
      TodoList: observable,
      addTodo: action,
      removeTodo: action,
      toggleTodo: action,
      getTodoList: computed,
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static get Store() {
    if (!this.store) this.store = new TodoStore();
    return this.store;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addTodo(text: string) {
    const item: ItemProps = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.TodoList.push(item);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  removeTodo(id: string) {
    const index = this.TodoList.findIndex(item => item.id === id);
    this.TodoList.splice(index, 1);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toggleTodo(id: string) {
    const index = this.TodoList.findIndex(item => item.id === id);
    this.TodoList[index].completed = !this.TodoList[index].completed;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get getTodoList() {
    return this.TodoList;
  }
}

export default TodoStore;
