import { observer } from 'mobx-react';
import React, { useCallback, useState } from 'react';
import TodoStore from '../../TodoStore/TodoStore';
import { AddBox, AddInput, Button } from './TodoInsertStyle';

const TodoInsert = observer(() => {
  const todoStore = TodoStore.Store;
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return (
    <>
      <AddBox>
        <AddInput
          placeholder="Things to do!"
          value={value}
          onChange={onChange}
        />
        <Button
          onClick={() => {
            todoStore.addTodo(value);
            setValue('');
          }}
        >
          Submit
        </Button>
      </AddBox>
    </>
  );
});

export default TodoInsert;
