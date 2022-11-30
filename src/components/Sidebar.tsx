import styled from "styled-components";
import { ReactComponent as Logo } from "../common/images/svg/logo.svg";
import { Colors } from "../common/styles";
import { Input } from "./Input";
import userAvatar from "../common/images/avatar.png";
import { CollapsibleCategory } from "./CollapsibleCategory";

const Wrapper = styled.div`
  background: ${Colors.deepBlue};
  height: 100vh;
  width: 220px;
  padding: 26px 16px;

  svg {
    margin-bottom: 26px;
  }
`;

const MyWorkspace = styled.div`
  background: ${Colors.blue};
  padding: 9px 16px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: -16px;
  width: 100%;

  span {
    color: ${Colors.white};
    font-size: 14px;
    line-height: 16px;
    margin-left: 8px;
  }
`;

export function Sidebar() {
  return (
    <Wrapper>
      <Logo />
      <Input placeholder="Search..." />
      <MyWorkspace>
        <img src={userAvatar} width={22} height={22} alt="User avatar" />
        <span>My workspace</span>
      </MyWorkspace>
      <CollapsibleCategory
        categoryName="Favorites"
        childrens={["Marketing", "Mobile App"]}
      />
      <CollapsibleCategory
        categoryName="My Projects"
        childrens={[
          "Marketing",
          "Landing Pages",
          "Wedding",
          "Mobile App",
          "House Construction",
        ]}
      />
    </Wrapper>
  );
}
