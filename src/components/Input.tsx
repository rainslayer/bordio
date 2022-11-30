import styled from "styled-components";
import searchIcon from "../common/images/svg/search.svg";
import { Colors } from "../common/styles";

const StyledInput = styled.input({
  background: Colors.blue,
  border: "none",
  borderRadius: "4px",
  color: Colors.gray,
  fontSize: "14px",
  padding: "9px 10px",
  position: "relative",
});

const Label = styled.label({
  position: "relative",

  "::after": {
    content: `""`,
    position: "absolute",
    right: 8,
    top: 0,
    bottom: 0,
    width: "16px",
    height: "16px",
    background: `url(${searchIcon})`,
    backgroundRepeat: "no-repeat",
  },
});

interface IComponentProps {
  placeholder?: string;
}

export function Input(props: IComponentProps) {
  const { placeholder } = props;

  return (
    <Label>
      <StyledInput placeholder={placeholder} />
    </Label>
  );
}
