import React from 'react'
import ServicesLeftSide from './ServicesLeftSide'
import ServicesRightSide from './ServicesRightSide'

function Services() {
    return (
        <>
            
    {/* what we do start */}
    <section id="services" className="pos-rel section-bg-light-1" data-midnight="black">
      {/* pos-rel start */}
      <div className="pos-rel flex-min-height-100vh">
        {/* container start */}
        <div className="container padding-top-bottom-120">
          <h3 className="headline-xxxs text-color-black hidden-box">
            <span className="anim-slide js-scrollanim">What We Do</span>
          </h3>
          {/* flex-container start */}
          <div className="flex-container">

          <ServicesLeftSide />

          <ServicesRightSide />

          </div>{/* flex-container end */}
        </div>{/* container end */}
      </div>{/* pos-rel end */}
    </section>{/* what we do end */}

        </>
    )
}

export default Services
