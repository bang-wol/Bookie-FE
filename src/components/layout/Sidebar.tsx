import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader to="/">Bookie</SidebarHeader>
      <SidebarMenu>
        <SidebarLink to="/read">Read</SidebarLink>
        <SidebarLink to="/reading">Reading</SidebarLink>
        <SidebarLink to="/wish">Wish</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  hegiht: 100vh;
  padding-top: 20px;
`;
const SidebarHeader = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  font-family: "Helvetica Neue", sans-serif;
  margin-bottom: 30px;
  color: #343a40;
`;
const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SidebarLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-family: "Helvetica Neue", sans-serif;
  margin-left: 20px;
  color: #343a40;
  &:hover {
    color: #86cb92;
  }
`;

export default Sidebar;
