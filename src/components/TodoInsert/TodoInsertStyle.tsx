import styled from 'styled-components';

export const AddBox = styled.div`
  background: none;
  display: flex;
  margin-top: 10px;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const AddInput = styled.input`
  color: white;
  display: flex;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
  width: 270px;
  height: 30px;
  border-radius: 30px;
  font-size: 20px;
  text-align: center;
  background: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      color: #161a2b;
    }
  }
  &::placeholder {
    font-size: 20px;
    color: white;
  }
`;
export const Button = styled.button`
  border-radius: 30px;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  white-space: nowrap;
  padding: 12px 30px;
  color: white;
  font-size: 15px;
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
    color: black;
  }
`;
