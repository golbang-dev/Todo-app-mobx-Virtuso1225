import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 0;
`;
export const TitleContainer = styled.div`
  border: none;
  border-bottom: 2px solid lightgray;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  width: 400px;
  background: none;
  z-index: 1;
`;
export const Title = styled.h1`
  color: black;
  font-size: 30px;
`;
export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: white;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;
