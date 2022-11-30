import styled from "styled-components";
import { Colors } from "../common/styles";
import { ReactComponent as GroupSvg } from "../common/images/svg/group.svg";
import { ReactComponent as CalendarSvg } from "../common/images/svg/calendar.svg";
import { ReactComponent as TasksSvg } from "../common/images/svg/tasks.svg";
import { ReactComponent as NotesSvg } from "../common/images/svg/notes.svg";
import { ReactComponent as FilesSvg } from "../common/images/svg/files.svg";

const Wrapper = styled.div`
  background: ${Colors.white2};
  height: 100vh;
  width: 154px;
  padding-right: 16px;
  color: ${Colors.black};

  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-top: 24px;
    margin-bottom: 26px;
    padding-left: 16px;
  }

  ul {
    list-style: none;
    padding-left: 0px;

    li {
      font-size: 14px;
      line-height: 16px;
      padding: 17px 14px;
      cursor: pointer;

      display: flex;
      align-items: center;

      svg {
        margin-right: 14px;
      }

      &:nth-of-type(2) {
        background: ${Colors.white};
        color: ${Colors.azure};
        border-radius: 0px 8px 8px 0px;
        position: relative;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          width: 4px;
          height: 100%;
          background: #0094ff;
          border-radius: 0px 10px 10px 0px;
        }
      }
    }
  }
`;

export function Tools() {
  return (
    <Wrapper>
      <h2>Tools</h2>
      <ul>
        <li>
          <GroupSvg /> Roadmap
        </li>
        <li>
          <CalendarSvg /> Schedule
        </li>
        <li>
          <TasksSvg /> Tasks
        </li>
        <li>
          <NotesSvg /> Notes
        </li>
        <li>
          <FilesSvg /> Files
        </li>
      </ul>
    </Wrapper>
  );
}
