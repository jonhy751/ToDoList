import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  padding-bottom: 100px;
  justify-content: center;
  height: 400px;
`;

export const TextRegular = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
export const TextBold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
