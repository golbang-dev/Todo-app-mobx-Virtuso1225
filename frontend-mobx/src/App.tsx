import React, { useEffect } from 'react';
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
