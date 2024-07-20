import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  color: #fff;
  font-size: 16px;
  width: 220px;
  height: 44px;
  border: 1px solid transparent;
  background: #000;
  border-radius: 5px;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #e3dfdf;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s background ease-in;
  }
`;
const outlineButton = styled(Button)`
  background: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
  }
`;
export default outlineButton;
