import { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import { Colors } from "../common/styles";
import { ICardInfo } from "../common/types";
import { IDropHandlerProps } from "./Board";

const StyledCard = styled.div<ICardProps>`
  padding: 15px;
  background: ${(props) => props.background};
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p<IDescriptionProps>`
  color: ${Colors.black};
  font-size: 14px;
  line-height: 16px;
  text-decoration: ${(props) => props.completed && "line-through"};
`;

const CardEstimate = styled.p<IEstimateProps>`
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => props.color};
`;

interface IComponentProps {
  card: ICardInfo;
  source: string;
  index: number;
  handleInsertCard: (
    props: IDropHandlerProps,
    key: string,
    index: number
  ) => void;
}

interface ICardProps {
  background: string;
}

interface IDescriptionProps {
  completed: boolean;
}

interface IEstimateProps {
  color: string;
}

export function Card(props: IComponentProps) {
  const { card, source, index, handleInsertCard } = props;
  const [isCompleted] = useState<boolean>(source === "Completed");
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item: IDropHandlerProps) => handleInsertCard(item, source, index),
    options: {},
  }));

  const [{ opacity }, drag] = useDrag(
    () => ({
      type: "Card",
      item: { source: source, index: index },

      collect: (monitor) => {
        return {
          opacity: monitor.isDragging() ? 0.5 : 1,
        };
      },
    }),
    []
  );
  drop(drag(ref));

  return (
    <StyledCard
      ref={ref}
      style={{ opacity }}
      background={isCompleted ? Colors.completed : card.bgColor}
    >
      <CardDescription completed={isCompleted}>
        {card.description}
      </CardDescription>
      <CardEstimate color={card.estimateColor}>{card.estimate}</CardEstimate>
    </StyledCard>
  );
}
