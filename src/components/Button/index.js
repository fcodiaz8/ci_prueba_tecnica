import * as S from "./styles";

export const Button = ({ type, label, onClick, disabled }) => {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </S.Button>
  );
};
