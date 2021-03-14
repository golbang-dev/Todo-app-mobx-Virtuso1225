import React, { useState, useCallback } from "react";
import { AddBox, AddForm, AddInput, Button } from "./TodoAddElement";

interface insert {
  onInsert: (text: any) => void;
}
const TodoAdd = ({ onInsert }: insert) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <>
      <AddBox>
        <AddForm onSubmit={onSubmit}>
          <AddInput
            placeholder="Things to do!"
            value={value}
            onChange={onChange}
          />
        </AddForm>
        <Button onClick={onSubmit}>Submit</Button>
      </AddBox>
    </>
  );
};

export default TodoAdd;
