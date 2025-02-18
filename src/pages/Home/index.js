import * as S from "./styles";
import { Button } from "../../components/Button";

export const Home = () => {
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

        <S.Content>Content</S.Content>

        <S.Buttons>
          <div>
            <Button type="secondary" label="x" />
            <Button type="secondary" label="DELETE" />
          </div>
          <div>
            <Button type="primary" label="ADD" />
          </div>
        </S.Buttons>
      </S.Window>
    </S.Home>
  );
};
