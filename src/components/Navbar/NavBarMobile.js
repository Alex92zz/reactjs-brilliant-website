import React from 'react'
import {Link} from 'react-router-dom';

function NavBarMobile() {
    return (
        <>
            
  {/* navigation start */}
  <nav className="nav-container pos-rel">
    {/* pos-rel start */}
    <div className="pos-rel height-100perc">
      {/* menu-box start */}
      <ul className="menu-box">
        {/* nav-btn-box start */}
        <li className="nav-btn-box">
        <Link className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close" to="/">
            <span className="nav-btn__inner" data-text="Home">Home</span>
        </Link>
        </li>{/* nav-btn-box end */}


        {/* nav-btn-box start */}
        <li className="nav-btn-box">
          <a href="#down" className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close">
            <span className="nav-btn__inner" data-text="About Us">About</span>
          </a>
        </li>{/* nav-btn-box end */}


        {/* nav-btn-box start */}
        <li className="nav-btn-box">
          <a href="#services" className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close">
            <span className="nav-btn__inner" data-text="Services">Services</span>
          </a>
        </li>{/* nav-btn-box end */}


        {/* nav-btn-box start */}
        <li className="nav-btn-box">
          <a href="#portfolio" className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close">
            <span className="nav-btn__inner" data-text="Portfolio">Portfolio</span>
          </a>
        </li>{/* nav-btn-box end */}


        {/* nav-btn-box start */}
        <li className="nav-btn-box">
          <a href="#support" className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close">
            <span className="nav-btn__inner" data-text="Testimonials">Testimonials</span>
          </a>
        </li>{/* nav-btn-box end */}


        <li className="nav-btn-box">
          <a href="#pricing" className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close">
            <span className="nav-btn__inner" data-text="Pricing">Pricing</span>
          </a>
        </li>{/* nav-btn-box end */}


        {/* nav-btn-box start */}
        <li className="nav-btn-box">
        <Link className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close" to="/blog">
            <span className="nav-btn__inner" data-text="Blog">Blog</span>
        </Link>
        </li>{/* nav-btn-box end */}
        {/* nav-btn-box start */}

        {/* nav-btn-box start */}
        <li className="nav-btn-box">
        <Link className="nav-btn large js-pointer-large js-smooth-scroll js-landing-close" to="/contact">
            <span className="nav-btn__inner" data-text="Contact">Contact</span>
        </Link>
        </li>{/* nav-btn-box end */}

        
      </ul>{/* menu-box end */}
    </div>{/* pos-rel end */}
  </nav>{/* navigation end */}
        </>
    )
}

export default NavBarMobile
