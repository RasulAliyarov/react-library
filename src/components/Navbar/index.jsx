import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavbarStyle from "./Navbar.module.css"

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

function Navbar() {
  return (
    <Header className={NavbarStyle.container}>
      <div className="header__left">
        <NavLink to="/" className={`${NavbarStyle.link} ${NavbarStyle.logo}`}>ALIYAR | LIBRARY</NavLink>
      </div>
      <div className="header__right">
        <NavLink className={({ isActive }) => isActive ? `${NavbarStyle.activeLink} ${NavbarStyle.link}` : `${NavbarStyle.link}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? `${NavbarStyle.activeLink} ${NavbarStyle.link}` : `${NavbarStyle.link}`} to="/library">Library</NavLink>
        <NavLink className={({ isActive }) => isActive ? `${NavbarStyle.activeLink} ${NavbarStyle.link}` : `${NavbarStyle.link}`} to="/favourite">Favourites</NavLink>
      </div>
    </Header>
  )
}

export default Navbar