import React from 'react'
import {Link} from 'react-router-dom';

function NavBarLaptop() {
    return (
        <>
              {/* laptop & PC navbar start */}
  <nav className="landing-nav js-midnight-color">
    <ul className="landing-nav__flex">
      <li className="landing-nav__btn">
        <Link className="landing-nav__inner js-smooth-scroll js-pointer-large" to="/">Home</Link>
      </li>
      <li className="landing-nav__btn">
        <a href="#down" className="landing-nav__inner js-smooth-scroll js-pointer-large">About</a>
      </li>
      <li className="landing-nav__btn">
        <a href="#services" className="landing-nav__inner js-smooth-scroll js-pointer-large">Services</a>
      </li>
      <li className="landing-nav__btn">
        <a href="#portfolio" className="landing-nav__inner js-smooth-scroll js-pointer-large">Portfolio</a>
      </li>
      <li className="landing-nav__btn">
        <a href="#support" className="landing-nav__inner js-smooth-scroll js-pointer-large">Testimonials</a>
      </li>
      <li className="landing-nav__btn">
        <a href="#pricing" className="landing-nav__inner js-smooth-scroll js-pointer-large">Pricing</a>
      </li>
      <li className="landing-nav__btn">
        <Link className="landing-nav__inner js-smooth-scroll js-pointer-large" to="/blog">Blog</Link>
      </li>
      <li className="landing-nav__btn">
      <Link className="landing-nav__inner js-smooth-scroll js-pointer-large" to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>{/* laptop & PC navbar start */}
        </>
    )
}

export default NavBarLaptop
