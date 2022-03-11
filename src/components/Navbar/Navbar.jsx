import React from 'react'
import{ Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

function Navbar() {
    return (
        <>
        <Nav>
          <NavLink to='/'>
          <img src="https://img.icons8.com/fluency/48/000000/ethereum.png" alt='logo'/><span><h2 style={{color:'black',fontWeight:'600'}}>LottoEther</h2></span>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='home' activeStyle>
              Home
            </NavLink>
            <NavLink to='lottery1' activeStyle>
              Lottery
            </NavLink>
            <NavLink to='about-us' activeStyle>
              About Us
            </NavLink>
            <NavLink to='contact-us' activeStyle>
              Contact Us
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/connect'>Connect Wallet</NavBtnLink>
          </NavBtn>
        </Nav>


          
            
        </>
    )
}

export default Navbar
