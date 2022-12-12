import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 327px;
  height: 64px;
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 10px;
  margin-top: 21px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`;

type ButtonCheck = {
  checked: boolean
}


export const ButtonCheck = styled(TouchableOpacity)<ButtonCheck>`
  border: 3px solid ${({ theme }) =>  theme.COLORS.BLUE};
  background-color: ${({checked,theme})=>checked ? theme.COLORS.BLUE :theme.COLORS.GRAY_400};
  width: 18px;
  height: 18px;
  border-radius: 50px;
`;

export const ButtonRemove = styled(TouchableOpacity)`
  width: 14px;
  height: 14px;
`;

export const TextCard = styled.Text<ButtonCheck>`
font-size: 14px;
text-decoration:${(props)=>props.checked && "line-through"};
font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
color: ${({ theme })=> theme.COLORS.GRAY_100};
`;
