import * as S from "./styles";

export const Item = ({
  label,
  selected,
  toggleSelectItem,
  handleDoubleClick,
}) => {
  return (
    <S.Item
      selected={selected}
      onClick={(e) => toggleSelectItem(e.target.textContent)}
      onDoubleClick={(e) => handleDoubleClick(e.target.textContent)}
    >
      <span>{label}</span>
    </S.Item>
  );
};
