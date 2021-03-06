import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

import NavbarItem from "./NavbarItem"
import ThemeSwitcher from "./ThemeSwitcher"
import Burger from "./Burger"

const StyledNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 720px) {
    & li {
      display: none;
    }
    & button {
      display: block;
    }
  }
`

const Navbar = ({ currentPage, sidebarHandler }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <StyledNavbar themeColor={themeColor}>
      <NavbarItem to="/" className={currentPage === "index" ? "active" : ""}>
        Blog
      </NavbarItem>
      <NavbarItem
        to="/about"
        className={currentPage === "about" ? "active" : ""}
      >
        About
      </NavbarItem>
      <Burger />
      <ThemeSwitcher />
    </StyledNavbar>
  )
}

export default Navbar
