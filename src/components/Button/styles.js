import styled from "styled-components";
import { COLOR_PALETTE as C } from "../../styles";

export const Button = styled.button`
  color: ${C.WHITE};
  background-color: ${C.BACKGROUND_BUTTON};
  border: solid 1px ${C.BACKGROUND_BUTTON};
  border-radius: 50px;
  padding: 15px 50px;
  font-size: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ type }) => {
    if (type === "secondary") {
      return `
        color: ${C.BACKGROUND_BUTTON};
        background-color: ${C.WHITE};
        padding: 15px 30px;
      `;
    }
  }}
`;
