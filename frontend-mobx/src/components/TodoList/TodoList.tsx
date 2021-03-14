import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoListContainer, TodoListWrapper } from './TodoListStyle';
import TodoStore from '../../TodoStore/TodoStore';
import { observer } from 'mobx-react';

const TodoList = () => {
  const { TodoList: todoList } = TodoStore.Store;

  return (
    <>
      <TodoListWrapper>
        <TodoListContainer>
          {todoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TodoListContainer>
      </TodoListWrapper>
    </>
  );
};

export default observer(TodoList);
