import styled from "styled-components";
import { Colors } from "../common/styles";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { Notifications } from "./Notifications";
import { ReactComponent as AvatarSvg } from "../common/images/svg/avatar_large.svg";

const Wrapper = styled.div`
  background: ${Colors.white};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px #f0f1f2;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 364px;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;

  input {
    background: ${Colors.white2};
    border-radius: 50px;
    padding: 12px 16px;
  }
`;

export function Header() {
  return (
    <Wrapper>
      <Controls>
        <Button>+ Add new</Button>
        <Dropdown
          defaultValue="Kanban"
          options={["Board view", "Table view", "Kanban"]}
        />
        <Dropdown defaultValue="Filter" options={["Filter"]} />
      </Controls>
      <UserSection>
        <Input placeholder="Select..." />
        <Notifications />
        <AvatarSvg />
      </UserSection>
    </Wrapper>
  );
}
