import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  width: 250px;
  height: 100vh;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
`;

const NavItem = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  border-radius: 5px;

  &.active {
    background-color: #4CD9E4;
    color: #fff;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Navbar = () => {
  return (
    <Sidebar>
      <NavItem to="/" exact>
        Timeline
      </NavItem>
      <NavItem to="/explore">
        Explore
      </NavItem>
      <NavItem to="/messages">
        Messages
      </NavItem>
      <NavItem to="/notifications">
        Notifications
      </NavItem>
    </Sidebar>
  );
};

export default Navbar;
