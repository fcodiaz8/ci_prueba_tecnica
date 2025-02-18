import styled from "styled-components";
import { COLOR_PALETTE as C } from "../../styles";

export const Item = styled.div`
  height: 40px;
  padding: 9px 18px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    color: ${C.WHITE};
    background-color: ${C.BACKGROUND_BUTTON};
    opacity: 0.8;
  }

  ${({ selected }) => {
    if (selected) {
      return `
        color: ${C.WHITE};
        background-color: ${C.BACKGROUND_BUTTON};
      `;
    }
  }}

  span {
    height: 22px;
    font-size: 18px;
  }
`;
