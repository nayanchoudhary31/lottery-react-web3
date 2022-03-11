import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0.5em; calc((100vw -1000px)/2);
  z-index: 10;
  border-bottom:2px solid black;
`;

export const NavLink = styled(Link)`

color: black;
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
cursor:pointer;
padding: 0  1rem;

&.active{
    color: #15cdfc;
}
}


`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right:24px;
    @media  screen and (max-width:768px) {
        display:none;
    }

`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`


export const NavBtnLink = styled(Link)
`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    border-radius:30px;

    color: #fff;
    border: none;
    outline: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

&:hover{
  transition: all 0.2s ease-out;
  background:#fff;
  color:#010606;        
}
`
