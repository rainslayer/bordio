import { useRef } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { Colors } from "../common/styles";
import { ICardInfo } from "../common/types";
import { IDropHandlerProps } from "./Board";
import { Card } from "./Card";

const StyledTd = styled.td`
  width: 270px;
  padding: 15px;
  border-right: 1px solid ${Colors.gray2};
`;

interface IComponentProps {
  source: string;
  data: ICardInfo[];
  handleAppendCard: (props: IDropHandlerProps, key: string) => void;
  handleInsertCard: (
    props: IDropHandlerProps,
    key: string,
    index: number
  ) => void;
}

export function CardsList(props: IComponentProps) {
  const { source, data, handleAppendCard, handleInsertCard } = props;
  const ref = useRef<HTMLTableCellElement>(null);
  const [, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item: IDropHandlerProps, monitor) => {
      if (!monitor.didDrop()) {
        handleAppendCard(item, source);
      }
    },
  }));

  drop(ref);
  return (
    <StyledTd ref={ref}>
      {data.map((card: ICardInfo, index: number) => (
        <Card
          key={card?.description + index}
          source={source}
          card={card}
          index={index}
          handleInsertCard={handleInsertCard}
        />
      ))}
    </StyledTd>
  );
}
