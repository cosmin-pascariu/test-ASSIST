import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const SidebarContainer = styled.div`
  width: 230px;
  height: 100vh;
  background-color: #347ab4;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`;

export const SidebarLogo = styled.img`
  height: 50px;
  width: 40px;
  margin-right: 20px;
  margin-top: 10px;
  align-items: center;
`;

export const SidebarOptions = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const SidebarOption = styled(Link)`
  width: 100%;
  height: 50px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #337af4;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  left: 230px;
  bottom: 0;
  width: 83%;
  height: 40px;
  background-color: #ededed;
  color: #515356;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
