import {
  ButtonAdd,
  Container,
  ContainerInput,
  ContainerTitle,
  Header,
  ImageLogo,
  InputView,
  NumberCount,
  TextNumber,
  Title,
  ViewBackground,
  ViewImage,
} from "./styles";
import Logo from "../../../assets/icons/Logo.png";
import theme from "../../theme";
import { PlusCircle } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import CardList from "../../components/CardList";
import ListEmpty from "../../components/ListEmpty";
export type List = {
  text: string;
  checked: boolean;
};
export default function HomePage() {
  const [text, setText] = useState("");
  const [list, setList] = useState<List[]>([]);
  function handleAddList() {
    if(text==="")return
    if (list.find((list) => list.text === text)) {
      setText("");
      return Alert.alert("Duplicado", "item ja contem na lista");
    }
    setList((prevState) => [...prevState, { text: text, checked: false }]);
    setText("");
  }

  return (
    <Container>
      <ViewImage>
        <ImageLogo source={Logo} />
      </ViewImage>
      <ViewBackground>
        <ContainerInput>
          <InputView
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.COLORS.GRAY_300}
            value={text}
            onChangeText={setText}
          />
          <ButtonAdd onPress={() => handleAddList()}>
            <PlusCircle color="#fff" size={20} />
          </ButtonAdd>
        </ContainerInput>
        <Header>
          <ContainerTitle>
            <Title>Criadas </Title>
            <NumberCount>
              <TextNumber>{list.length}</TextNumber>
            </NumberCount>
          </ContainerTitle>
          <ContainerTitle>
            <Title check>Concluidas</Title>
            <NumberCount>
              <TextNumber>
                {list.filter((res) => {
                  res.checked == true;
                }).length}
              </TextNumber>
            </NumberCount>
          </ContainerTitle>
        </Header>
        <FlatList
          data={list}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <CardList
              list={item}
              key={item.text}
              onRemove={() => {
                const listNew = list.filter((res) => res.text != item.text);
                setList(listNew);
              }}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          showsVerticalScrollIndicator={false}
        />
      </ViewBackground>
    </Container>
  );
}
