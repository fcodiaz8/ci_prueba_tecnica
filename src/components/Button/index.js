import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const Button = ({ type, icon, label, onClick, disabled }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "revert":
        return <FontAwesomeIcon icon={faRotateLeft} />;

      default:
        return null;
    }
  };

  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
      {getIcon(icon)}
      {label}
    </S.Button>
  );
};
