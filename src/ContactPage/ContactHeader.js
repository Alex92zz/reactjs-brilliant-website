import React from 'react'

function ContactHeader() {
    return (
        <>
            
          {/* pos-rel start */}
          <section id="up" className="pos-rel js-parallax-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/kal-visuals--UG2O1U2EfY-unsplash.jpg)' }}>
            {/* bg-overlay */}
            <div className="bg-overlay-black" />
            {/* pos-rel start */}
            <div className="pos-rel flex-min-height-100vh">
              <div className="padding-top-bottom-120 container small after-preloader-anim">
                {/* title start */}
                <h2 className="headline-xl">
                  <span className="hidden-box d-block">
                    <span className="anim-slide">The Best</span>
                  </span>
                  <span className="hidden-box d-block">
                    <span className="anim-slide tr-delay-01">Agency for</span>
                  </span>
                  <span className="hidden-box d-block">
                    <span className="anim-slide tr-delay-02">Your Businnes</span>
                  </span>
                </h2>{/* title end */}
                <p className="subhead-xs text-color-dadada margin-top-20 anim-fade tr-delay-04">Tote bag cornhole pork belly swag vexillologist godard.</p>




                        <div className="margin-top-60  hidden-box after-preloader-anim">
                        <a href="#contact-form" className="border-btn js-pointer-large anim-slide js-smooth-scroll">
                                <span className="border-btn__inner">Send a message</span>
                                <span className="border-btn__lines-1" />
                                <span className="border-btn__lines-2" />
                            </a>
                        </div>


              </div>
            </div>{/* pos-rel end */}
          </section>{/* pos-rel end */}
        </>
    )
}

export default ContactHeader
