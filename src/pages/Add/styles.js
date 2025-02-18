import styled from "styled-components";
import { COLOR_PALETTE as C } from "../../styles";

export const Add = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${C.BACKGROUND_ADD};

  display: flex;
  justify-content: center;
`;

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${C.WHITE};
  width: 700px;
  height: 276px;
  border-radius: 20px;
  box-shadow: 0px 5px 12px ${C.SHADOW};
  box-sizing: border-box;
  padding: 50px;
  margin: 50px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  color: ${C.BLACK};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  input {
    color: ${C.BLACK};
    background-color: ${C.BACKGROUND_3};
    height: 22px;
    margin-bottom: 25px;
    border: solid 1px ${C.BORDER};
    padding: 19px 21px;
    outline: none;
    font-family: "Montserrat";
    font-size: 18px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 49px;

  > div {
    display: flex;
    gap: 15px;
  }
`;
