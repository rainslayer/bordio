import React from "react";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Tools } from "./components/Tools";

const VerticalWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
`;

function App() {
  return (
    <VerticalWrapper>
      <Sidebar />
      <Tools />
    </VerticalWrapper>
  );
}

export default App;
