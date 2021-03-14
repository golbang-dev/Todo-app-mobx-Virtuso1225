import React from 'react';
import styled from 'styled-components';
import { GrCheckbox } from 'react-icons/gr';
import { ImCheckboxChecked } from 'react-icons/im';
import { BsTrash } from 'react-icons/bs';

interface TodoProps {
  id?: number;
  TodoContent: string;
  checked: boolean;
}
interface Items {
  item: TodoProps;
  onRemove: (id: any) => void;
  onToggle: (id: any) => void;
}

const TodoItem = ({ item, onRemove, onToggle }: Items) => {
  const { id, TodoContent, checked } = item;
  return (
    <ItemContainer>
      <CheckBox onClick={() => onToggle(id)}>
        {checked ? <ImCheckboxChecked /> : <GrCheckbox />}
      </CheckBox>
      <Item style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {TodoContent}
      </Item>
      <IconContainer onClick={() => onRemove(id)}>
        <BsTrash />
      </IconContainer>
    </ItemContainer>
  );
};

export const ItemContainer = styled.div`
  background: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
  width: 300px;
  height: 75px;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
`;

export const CheckBox = styled.div`
  background: none;
`;
export const Item = styled.p`
  font-size: 25px;
  font-weight: 500;
  padding-left: 30px;
  color: black;
`;

export const IconContainer = styled.button`
  background: #ff3333;
  font-size: 20px;
  border: none;
  width: 70px;
  height: 50px;
  border-radius: 15px;
  margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
  }
`;

export default TodoItem;
