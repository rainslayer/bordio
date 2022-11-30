import styled from "styled-components";
import { Colors } from "../common/styles";
import Arrow from "../common/images/svg/arrow.svg";

const Category = styled.span`
  color: ${Colors.white};
  font-size: 14px;
  line-height: 16px;
  margin-top: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    margin-right: 15px;
    width: 25px;
    height: 25px;
    background: url(${Arrow});
    background-size: 25px;
    background-repeat: no-repeat;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const ListItem = styled.li`
  color: ${Colors.gray};
  font-size: 14px;
  margin-bottom: 18px;
`;

interface IComponentProps {
  categoryName: string;
  childrens?: string[];
}

export function CollapsibleCategory(props: IComponentProps) {
  const { categoryName, childrens } = props;

  return (
    <>
      <Category>{categoryName}</Category>
      <List>
        {childrens?.map((children: string) => (
          <ListItem key={children}>{children}</ListItem>
        ))}
      </List>
    </>
  );
}
