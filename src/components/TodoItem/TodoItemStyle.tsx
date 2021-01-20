import styled from 'styled-components';

interface checked {
  completed: boolean;
}
export const ItemContainer = styled.div`
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  margin-bottom: 10px;
  display: flex;
  position: relative;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
  width: 350px;
  height: 60px;
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2);
  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }
  &:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(250, 0, 135, 1) 100%
    );
  }
  &:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }
`;

export const CheckBox = styled.div`
  background: none;
`;

export const Item = styled.p<checked>`
  font-size: 25px;
  font-weight: 500;
  padding-right: 90px;
  text-decoration: ${p => (p.completed ? 'line-through' : 'none')};
  padding-left: 30px;
`;

export const IconContainer = styled.button`
  background: #ff3333;
  position: absolute;
  right: 10px;
  font-size: 20px;
  border: none;
  width: 70px;
  height: 50px;
  border-radius: 15px;
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
