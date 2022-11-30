import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Tools } from "./components/Tools";

const RowWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 422px;
`;

function App() {
  return (
    <>
      <RowWrapper>
        <Sidebar />
        <Tools />
      </RowWrapper>
      <ColumnWrapper>
        <Header />
      </ColumnWrapper>
    </>
  );
}

export default App;
