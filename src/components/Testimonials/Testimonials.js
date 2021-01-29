import React from 'react'
import SliderOne from './SliderOne'
import SliderTwo from './SliderTwo'
import SliderThree from './SliderThree'

function Testimonials() {
    return (
        <>
                {/* support start */}
    <section id="support" className="pos-rel section-bg-dark-2">
      {/* pos-rel start */}
      <div className="pos-rel flex-min-height-100vh">
        {/* width-100perc start */}
        <div className="width-100perc padding-top-bottom-120">
          <h2 className="headline-l text-center">Excellent Support</h2>
          {/* padding-top-bottom-90 start */}
          <div className="padding-top-bottom-90 pos-rel">
            {/* js-1-view-slider start */}


            <div className="js-1-view-slider container small hidden-box">
              {/* swiper-wrapper start */}
              <div className="swiper-wrapper">

                <SliderOne />
                <SliderTwo />
                <SliderThree />


              </div>{/* swiper-wrapper end */}
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
            </div>{/* js-1-view-slider end */}
          </div>{/* padding-top-bottom-90 end */}
        </div>{/* width-100perc end */}
      </div>{/* pos-rel end */}
    </section>{/* support end */}

        </>
    )
}

export default Testimonials
