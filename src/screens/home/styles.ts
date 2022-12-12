import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

export const ViewBackground = styled(SafeAreaView)`
  background: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  align-items: center;
`;

export const Container = styled(SafeAreaView)`
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`;

export const ViewImage = styled(SafeAreaView)`
  padding: 60px;
  align-items: center;
`;

export const ImageLogo = styled.Image`
  width: 110px;
  height: 32px;
  align-items: center;
`;
export const ContainerInput = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: center;
  margin-top: -20px;
`;

export const InputView = styled.TextInput`
  width: 271px;
  height: 54px;
  padding: 8px;
  color: ${({ theme})=> theme.COLORS.WHITE};
  border: 1px solid rgba(13, 13, 13, 1);
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const ButtonAdd = styled(TouchableOpacity)`
  background: ${({ theme }) => theme.COLORS.BLUE_DARK};
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 5px;
`;
export const ContainerList = styled.View`
  align-items: center;
  width: 100%;
`;
export const Header = styled.View`
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  margin-top: 34px;
  padding-bottom: 20px;
`;
export const Title = styled.Text<{ check?: boolean }>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  color: ${({ theme, check }) =>
    check ? theme.COLORS.PURPLE : theme.COLORS.BLUE};
`;
export const NumberCount = styled.View`
  width: 25px;
  height: 19px;
  align-items: center;
  border-radius: 50px;
  margin-left: 8px;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.GRAY_400};
`;
export const TextNumber = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
