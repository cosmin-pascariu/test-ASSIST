import React from "react";
import {
  Container,
  SidebarContainer,
  SidebarLogo,
  SidebarOptions,
  SidebarOption,
  Footer,
} from "./SidebarElements";
import logo from "../../images/logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

const Sidebar = () => {
  const yourName = "Pascariu Cosmin";

  return (
    <Router>
      <Container>
        <SidebarContainer>
          <SidebarLogo src={logo} alt="logo" />
          <SidebarOptions>
            <SidebarOption to="/">Home</SidebarOption>
            <SidebarOption to="/about-us">About</SidebarOption>
            <SidebarOption to="/contact">Contact</SidebarOption>
          </SidebarOptions>
        </SidebarContainer>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer>
          <span>Created by: {yourName}</span>
          <span>ASSIST Software 2022</span>
        </Footer>
      </Container>
    </Router>
  );
};

export default Sidebar;
