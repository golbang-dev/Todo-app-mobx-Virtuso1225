import React from 'react';
import TodoItem from '../TodoItem';
import { TodoListContainer, TodoListWrapper } from './TodoListElement';

interface TodoProps {
  id?: number;
  TodoContent: string;
  checked: boolean;
}
interface Item {
  items: TodoProps[];
  onRemove: (id: any) => void;
  onToggle: (id: any) => void;
}

const TodoList = ({ items, onRemove, onToggle }: Item) => {
  return (
    <>
      <TodoListWrapper>
        <TodoListContainer>
          {items.map(item => (
            <TodoItem
              item={item}
              key={item.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
        </TodoListContainer>
      </TodoListWrapper>
    </>
  );
};

export default TodoList;
