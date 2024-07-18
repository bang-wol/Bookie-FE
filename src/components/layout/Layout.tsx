import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Content = styled.main`
  flex: 1;
  padding: 20px;
  background: #f8f9fa;
`;

export default Layout;
