import React, { useEffect } from 'react';
// import axios from 'axios';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';
import GlobalStyle from './components/TodoTemplate/GlobalStyle';
import {
  Title,
  TitleContainer,
  TodoContainer,
  TodoWrapper,
} from './components/TodoTemplate/TodoTemplateStyle';

const App: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:3000/getlist')
      .then(res => res.json())
      .then(todoItems => {
        console.log(todoItems);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <GlobalStyle />
      <TodoWrapper>
        <TodoContainer>
          <TitleContainer>
            <Title>Todo App</Title>
          </TitleContainer>
          <TodoInsert />
          <TodoList />
        </TodoContainer>
      </TodoWrapper>
    </div>
  );
};
export default App;
