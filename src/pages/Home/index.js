import { useState } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { Item } from "../../components/Item";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const toggleSelectItem = (e) => {
    let newSelectItems = structuredClone(selectedItems);
    if (newSelectItems.includes(e)) {
      newSelectItems = newSelectItems.filter((item) => item !== e);
    } else {
      newSelectItems.push(e);
    }
    setSelectedItems(newSelectItems);
  };

  return (
    <S.Home>
      <S.Window>
        <S.Title>This is a technical proof</S.Title>

        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
          inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
          hendrerit posuere augue fames dictumst placerat porttitor, dis mi
          pharetra vestibulum venenatis phasellus.
        </S.Description>

        <S.Content>
          {items.map((e) => (
            <Item
              key={e}
              label={e}
              selected={selectedItems.includes(e)}
              toggleSelectItem={toggleSelectItem}
            />
          ))}
        </S.Content>

        <S.Buttons>
          <div>
            <Button type="secondary" label="x" />
            <Button
              type="secondary"
              label="DELETE"
              disabled={selectedItems.length === 0}
            />
          </div>
          <div>
            <Button
              type="primary"
              label="ADD"
              onClick={() => navigate("/add")}
            />
          </div>
        </S.Buttons>
      </S.Window>
    </S.Home>
  );
};
