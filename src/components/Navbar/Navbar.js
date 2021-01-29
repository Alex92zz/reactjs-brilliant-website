import React from 'react'
import { NavLink } from 'react-router-dom'
import GetInTouch from './GetInTouch'
import MobileHamburgerMenu from './MobileHamburgerMenu'
import NavBarLaptop from './NavBarLaptop'
import NavBarMobile from './NavBarMobile'

function Navbar() {
  return (
    <>
      {/* mouse cursor */}
      <div className="pointer js-pointer" id="js-pointer">
        <i className="pointer__inner fas fa-long-arrow-alt-right" />
        <i className="pointer__inner fas fa-search" />
        <i className="pointer__inner fas fa-link" />
      </div>{/* mouse cursor */}

      {/* to top button */}
      <a href="#up" className="scroll-to-btn js-headroom js-midnight-color js-smooth-scroll js-pointer-large">
        <span className="scroll-to-btn__box">
          <span className="scroll-to-btn__arrow" />
        </span>
      </a>
      {/* to top button */}


      {/* one down button */}
      <a href="#down" className="scroll-to-btn to-down js-headroom js-midnight-color js-smooth-scroll js-pointer-large js-scroll-btn">
        <span className="scroll-to-btn__box">
          <span className="scroll-to-btn__arrow" />
        </span>
      </a>{/* one down button */}

      <MobileHamburgerMenu />

      {/* Left Side Bar */}
      <GetInTouch />
      {/* Left Side Bar */}

      <NavBarLaptop />
      <NavBarMobile />


    </>
  )
}

export default Navbar
