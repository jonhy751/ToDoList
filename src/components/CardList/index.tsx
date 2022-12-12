import { ButtonCheck, ButtonRemove, Container, TextCard } from "./styles";
import { Trash, Check } from "phosphor-react-native";
import { List } from "../../screens/home";
import { SetStateAction, useState } from "react";

type CardListProps = {
  list: List;
  onRemove: () => void
};

export default function CardList({ list,onRemove }: CardListProps) {
  const [IsRead, setIsRead] = useState(false);

  return (
    <Container>
      <ButtonCheck checked={IsRead} onPress={() => setIsRead(!IsRead)}>
        {IsRead && <Check color="#fff" size={12} />}
      </ButtonCheck>
      <TextCard checked={IsRead}> {list.text}</TextCard>
      <ButtonRemove onPress={()=>onRemove()}>
        <Trash color="#fff" size={14} />
      </ButtonRemove>
    </Container>
  );
}
