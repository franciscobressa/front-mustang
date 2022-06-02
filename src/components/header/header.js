import { useState } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Icon } from "@iconify/react";
import "./header.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./../../pages/home.js";
import Tabela from "../../pages/tabela/tabela.js";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    if(!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("mySidebar").style.padding = "0 0 0 24px";
      document.getElementById("wrapper").style.width = "100vw";
      }, 300);
    }
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("wrapper").style.width = "0";
    document.getElementById("mySidebar").style.padding = "0";

    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }

  return (
    <>
      <Router>          
      <Navbar className="px-2 py-4 d-flex" style={{float:'top'}}>
        <Icon
          icon="ant-design:menu-outlined"
          onClick={openNav}
          className="ms-2 d-block d-md-none pointer"
          style={{ fontSize: "42px", color: "white" }}
        />

        <div className="brand-logo col-1  d-none d-md-block">
          <Icon
            icon="carbon:logo-delicious"
            style={{ fontSize: "48.75px", color: "white" }}
          />
        </div>

        <Nav className="mx-auto col-11 justify-content-around d-none d-md-flex">
            <NavItem>
              <Link className="navItem" to="/">Home</Link>
            </NavItem>
            <NavItem className="navItem">Sobre</NavItem>
            <NavItem>
              <Link className="navItem" to="/tabela">Tabela</Link>
            </NavItem>
            <NavItem className="navItem">Fale Conosco</NavItem>
            <NavItem className="navItem">
              Entrar
              <Icon
                icon="ant-design:user-outlined"
                className="ms-2"
                style={{ fontSize: "23.5px", color: "white" }}
              />
            </NavItem>         
        </Nav>
      </Navbar>
      

      {isOpen && (
        <>
          <div id="wrapper" className="wrapper d-flex d-md-none" onClick={closeNav}></div>
          <div id="mySidebar" className="sidebar d-md-none">
              <Icon
                icon="carbon:logo-delicious"
                className="my-4"
                style={{ fontSize: "48.75px", color: "black" }}
              />            
            <NavItem className="navItemMobile mb-3">
              <Link className="navItemMobile" to="/">Home</Link>
            </NavItem>
            <NavItem className="navItemMobile mb-3">Fale Conosco</NavItem>
            <NavItem className="navItemMobile mb-3">Sobre</NavItem>
            <NavItem className="navItemMobile mb-3">
                <Link className="navItemMobile" to="/tabela">Tabela</Link>
            </NavItem>
          </div>
        </>
      )}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>  
        <Routes>
          <Route path="/tabela" element={<Tabela />} />
        </Routes>    
      </Router>
    </>
  );
}

export default Header;
