import { useState } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
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
        <div
          onClick={openNav}
          className="ms-2 d-block d-md-none pointer"
          style={{ fontSize: "42px", color: "white" }}
        >
          aaaa
        </div>

        <div className="brand-logo col-1  d-none d-md-block">
        </div>

        <Nav className="mx-auto col-11 justify-content-around d-none d-md-flex">
            <NavItem>
              <Link  onClick={closeNav} className="navItem" to="/">Home</Link>
            </NavItem>
            <NavItem className="navItem">Sobre</NavItem>
            <NavItem>
              <Link  onClick={closeNav} className="navItem" to="/tabela">Tabela</Link>
            </NavItem>
            <NavItem className="navItem">Fale Conosco</NavItem>
            <NavItem className="navItem">
              Entrar
            </NavItem>         
        </Nav>
      </Navbar>
      

      {isOpen && (
        <>
          <div id="wrapper" className="wrapper d-flex d-md-none" onClick={closeNav}></div>
          <div id="mySidebar" className="sidebar d-md-none">
            <NavItem className="navItemMobile mb-3">
              <Link  onClick={closeNav} className="navItemMobile" to="/">Home</Link>
            </NavItem>
            <NavItem className="navItemMobile mb-3">Fale Conosco</NavItem>
            <NavItem className="navItemMobile mb-3">Sobre</NavItem>
            <NavItem className="navItemMobile mb-3">
                <Link  onClick={closeNav} className="navItemMobile" to="/tabela">Tabela</Link>
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
