import styled from "styled-components";
import { Colors } from "../common/styles";

const StyledButton = styled.button`
  background: ${Colors.azure};
  border: none;
  border-radius: 50px;
  color: ${Colors.white};
  padding: 12px 20px;
  font-size: 14px;
  line-height: 16px;
`;

interface IComponentProps {
  children: string;
}

export function Button(props: IComponentProps) {
  const { children } = props;

  return <StyledButton>{children}</StyledButton>;
}
