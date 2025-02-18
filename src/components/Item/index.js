import * as S from "./styles";

export const Item = ({ label, selected, toggleSelectItem }) => {
  return (
    <S.Item
      selected={selected}
      onClick={(e) => toggleSelectItem(e.target.textContent)}
    >
      <span>{label}</span>
    </S.Item>
  );
};
