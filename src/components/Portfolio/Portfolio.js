import React from 'react'
import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
import SlideFour from './SlideFour'
import LawnCare from './LawnCare'

function Portfolio() {
  return (
    <>

      <section id="portfolio" className="pos-rel section-bg-dark-1">
        {/* pos-rel start */}
        <div className="pos-rel padding-top-bottom-120">
          <h2 className="headline-l text-center">Portfolio Pages</h2>
          {/* js-2-view-slider start */}
          <div className="js-2-view-slider padding-top-bottom-90 hidden-box pos-rel">

            <div className="swiper-wrapper js-slider-scroll-anim">

              <SlideOne />
              <SlideTwo />
              <SlideThree />
              <SlideFour />
              <LawnCare />

            </div>

            {/* swiper-button-prev start */}
            <div className="swiper-button-prev-box">
              <div className="swiper-button-prev" />
            </div>{/* swiper-button-prev end */}
            
            {/* swiper-button-next start */}
            <div className="swiper-button-next-box">
              <div className="swiper-button-next" />
            </div>{/* swiper-button-next end */}

            {/* swiper-pagination start */}
            <div className="pagination-box">
              <div className="swiper-pagination counter-pagination" />
            </div>{/* swiper-pagination end */}

          </div>{/* js-2-view-slider end */}
        </div>{/* pos-rel end */}
      </section>{/* portfolio pages end */}

    </>
  )
}

export default Portfolio
