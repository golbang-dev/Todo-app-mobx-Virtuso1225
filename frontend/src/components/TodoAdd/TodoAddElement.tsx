import styled from "styled-components";

export const AddBox = styled.div`
  background: none;
  display: flex;
  margin-top: 10px;
  z-index: 1;
`;
export const AddForm = styled.form`
  color: black;
  display: flex;
  border-radius: 30px;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
`;
export const AddInput = styled.input`
  width: 270px;
  height: 30px;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  text-align: center;
  &:focus {
    outline: none;
    &::placeholder {
      color: white;
    }
  }
  &::placeholder {
    font-size: 20px;
    color: black;
  }
`;
export const Button = styled.button`
  border-radius: 30px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 30px;
  color: #010606;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
  }
`;
