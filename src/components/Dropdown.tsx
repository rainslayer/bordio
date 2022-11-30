import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../common/styles";

const StyledSelect = styled.div<DropdownProps>`
  display: flex;
  align-items: ${(props) => (props.opened ? "baseline" : "center")};
  background: ${(props) => (props.opened ? Colors.lightGray : Colors.white2)};
  border: none;
  border-radius: 50px;
  color: ${Colors.black};
  padding: 12px 20px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:after {
    display: flex;
    align-self: baseline;
    content: "";
    margin-left: 15px;
    width: 5px;
    height: 5px;
    border: 2px solid ${Colors.gray};
    border-color: transparent transparent ${Colors.gray} ${Colors.gray};
    rotate: ${(props) => (props.opened ? "-225deg" : "-45deg")};
    transition: all 0.5s ease 0s;
  }
`;

const SelectBlock = styled.div`
  position: absolute;
  margin-top: 8px;
  z-index: 5;
  background: ${Colors.white};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 6px;
`;

const SelectOption = styled.div<SelectOptionProps>`
  cursor: pointer;
  padding: 18px 14px;
  border-radius: 4px;
  background: ${(props) => props.selected && Colors.white2};

  &:hover {
    background: ${Colors.white2};
  }
`;

interface IComponentProps {
  defaultValue?: string;
  options: string[];
}

interface DropdownProps {
  opened: boolean;
}

interface SelectOptionProps {
  selected?: boolean;
}

export function Dropdown(props: IComponentProps) {
  const { defaultValue, options } = props;
  const [opened, setOpened] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue ?? "");

  function handleClick() {
    setOpened(!opened);
  }

  function handleSelect(option: string) {
    setValue(option);
    setOpened(false);
  }

  return (
    <div>
      <StyledSelect opened={opened} onClick={handleClick}>
        {value}
      </StyledSelect>
      {opened && (
        <SelectBlock>
          {options.map((option: string) => (
            <SelectOption
              key={option}
              onClick={() => handleSelect(option)}
              {...(option === value && { selected: true })}
            >
              {option}
            </SelectOption>
          ))}
        </SelectBlock>
      )}
    </div>
  );
}
