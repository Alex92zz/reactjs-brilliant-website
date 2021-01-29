import React from 'react'

function MobileHamburgerMenu() {
    return (
        <>
            <header className="fixed-header">
                {/* logo start */}
                <div className="header-logo js-midnight-color js-headroom">
                    <div className="hidden-box">
                        <a href="index.html" className="header-logo__box js-pointer-large js-animsition-link">
                            <h1 id="logo-top-left" />
                        </a>
                    </div>
                </div>{/* logo end */}
                {/* menu-icon start */}
                <div className="menu-icon js-menu-open-close js-pointer-large js-midnight-color js-headroom">
                    <div className="menu-icon__box">
                        <span className="menu-icon__inner" />
                        <span className="menu-icon__close" />
                    </div>
                </div>{/* menu-icon end */}
            </header>
        </>
    )
}

export default MobileHamburgerMenu
