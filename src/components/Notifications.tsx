import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BellSvg } from "../common/images/svg/bell.svg";
import { Colors } from "../common/styles";
import { formatNumericOutput } from "../utils/formatNumericOutput";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: -10px;
    right: -15px;
    background: ${Colors.red};
    border: 1px solid ${Colors.white};
    border-radius: 4px;
    padding: 5px 4px;
    color: ${Colors.white};
    font-size: 10px;
    line-height: 10px;
  }
`;

export function Notifications() {
  const [notificationsCount] = useState<number>(100);

  return (
    <Wrapper>
      <BellSvg />
      <span>{formatNumericOutput(notificationsCount)}</span>
    </Wrapper>
  );
}
