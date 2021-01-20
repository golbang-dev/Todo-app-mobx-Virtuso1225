import React from 'react';
import { GrCheckbox } from 'react-icons/gr';
import { ImCheckboxChecked } from 'react-icons/im';
import { BsTrash } from 'react-icons/bs';
import { observer } from 'mobx-react';
import { CheckBox, IconContainer, Item, ItemContainer } from './TodoItemStyle';
import TodoStore, { ItemProps } from '../../TodoStore/TodoStore';

interface TodoProps {
  todo: ItemProps;
}

const TodoItem = ({ todo }: TodoProps) => {
  const todoStore = TodoStore.Store;
  const { id, text, completed } = todo;
  return (
    <ItemContainer>
      <CheckBox
        onClick={() => {
          todoStore.toggleTodo(id);
        }}
      >
        {completed ? <ImCheckboxChecked /> : <GrCheckbox />}
      </CheckBox>
      <Item completed={completed}>{text}</Item>
      <IconContainer
        onClick={() => {
          todoStore.removeTodo(id);
        }}
      >
        <BsTrash />
      </IconContainer>
    </ItemContainer>
  );
};
export default observer(TodoItem);
