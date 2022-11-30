import { useState } from "react";
import styled from "styled-components";
import { board } from "../common/const";
import { Colors } from "../common/styles";
import { formatNumericOutput } from "../utils/formatNumericOutput";
import { CardsList } from "./CardsList";

const StyledBoard = styled.table`
  background: ${Colors.white};
  padding-top: 25px;
  display: block;
  overflow-x: auto;

  tr {
    width: 100%;
    display: flex;
  }
`;

const BoardHeader = styled.thead`
  font-size: 14px;
  line-height: 16px;
  background: ${Colors.white};

  td {
    text-align: center;
    width: 300px;

    span {
      color: ${Colors.gray};
      background: ${Colors.lighterGray};
      padding: 2px 9px;
      border-radius: 100px;
      margin-left: 10px;
    }
    &:last-of-type {
      color: ${Colors.gray};
      cursor: pointer;
    }
  }

  &::after {
    content: "";
    display: block;
    height: 15px;
    border-bottom: 1px solid ${Colors.gray2};
  }
`;

const BoardBody = styled.tbody`
  border: 1px solid ${Colors.gray2};
`;

export interface IDropHandlerProps {
  source: string;
  index: number;
}

export function Board() {
  const [boardData, setBoardData] = useState(board);

  function handleAppendCard(item: IDropHandlerProps, key: string) {
    const boardUpdate = boardData;
    boardUpdate[key].push(...boardData[item.source].splice(item.index, 1));
    setBoardData({ ...boardUpdate });
  }

  function handleInsertCard(
    item: IDropHandlerProps,
    key: string,
    index: number
  ) {
    const boardUpdate = boardData;
    boardUpdate[key].splice(
      index,
      0,
      ...boardUpdate[item.source].splice(item.index, 1)
    );

    setBoardData({ ...boardUpdate });
  }

  return (
    <StyledBoard>
      <BoardHeader>
        <tr>
          {Object.keys(boardData).map((key: string) => (
            <td key={key}>
              {key}
              <span>
                {formatNumericOutput(Object.values(boardData[key]).length)}
              </span>
            </td>
          ))}
          <td>+ Create status</td>
        </tr>
      </BoardHeader>
      <BoardBody>
        <tr>
          {Object.keys(boardData).map((key: string, index: number) => {
            return (
              <CardsList
                key={key}
                source={key}
                data={boardData[key]}
                handleAppendCard={handleAppendCard}
                handleInsertCard={handleInsertCard}
              />
            );
          })}
        </tr>
      </BoardBody>
    </StyledBoard>
  );
}
