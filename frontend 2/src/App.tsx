import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import {
  Title,
  TitleContainer,
  TodoContainer,
  TodoWrapper,
} from './components/TodoTemplate/TemplateElement';

interface TodoProps {
  id?: number;
  TodoContent: string;
  checked: boolean;
}

function App() {
  const [value, setValue] = useState<TodoProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/getlist')
      .then(res => res.json())
      .then((toDoItems: TodoProps[]) => {
        setValue(toDoItems);
        console.log(toDoItems);
      })
      .catch(err => console.log(err));
  }, []);

  const onInsert = useCallback(
    (TodoContent: string) => {
      const todo: TodoProps = {
        TodoContent,
        checked: false,
      };
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/write',
        data: {
          content: TodoContent,
        },
      });
      setValue(value.concat(todo));
    },
    [value],
  );

  const onRemove = useCallback(
    (index: number) => {
      console.log(index);
      axios.delete('http://localhost:3000/api/remove', {
        data: { id: index },
      });
      setValue(value.filter(item => item.id !== index));
    },
    [value],
  );

  const onToggle = useCallback(
    (id: number) => {
      axios({
        url: 'http://localhost:3000/api/check',
        method: 'put',
        data: {
          index: id.toString(),
        },
      });
      setValue(
        value.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [value],
  );

  return (
    <div>
      <TodoWrapper>
        <TodoContainer>
          <TitleContainer>
            <Title>Todo App</Title>
          </TitleContainer>
          <TodoAdd onInsert={onInsert} />
          <TodoList items={value} onRemove={onRemove} onToggle={onToggle} />
        </TodoContainer>
      </TodoWrapper>
    </div>
  );
}
export default App;
