import styled from "styled-components/native";
interface ButtonContainerProps {
  variant?: string;
}
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: 16px 24px;
  background-color: ${({ theme, variant }) =>
    variant === "transparent" ? "transparent" : theme.COLORS.GRAY_600};

  width: 100%;
  border: ${({ theme, variant }) =>
    variant === "transparent"
      ? `1px solid ${theme.COLORS.GRAY_600}`
      : theme.COLORS.GRAY_600};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`;
