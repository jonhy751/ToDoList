import { Container, TextBold, TextRegular } from "./styles";
import { Notepad } from "phosphor-react-native";
import theme from "../../theme";
export default function ListEmpty() {
  return (
    <Container>
      <Notepad color={theme.COLORS.GRAY_500} size={56} />
      <TextBold>Você ainda não tem tarefas cadastradas</TextBold>
      <TextRegular>Crie tarefas e organize seus itens a fazer</TextRegular>
    </Container>
  );
}
