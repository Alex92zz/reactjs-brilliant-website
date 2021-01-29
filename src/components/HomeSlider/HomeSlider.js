import React from 'react'
import SliderOne from './SliderOne'
import SliderTwo from './SliderTwo'
import SliderThree from './SliderThree'

function HomeSlider() {
  return (
    <>
      <section id="up" className="pos-rel section-bg-dark-1 js-home-slider fullscreen-slider">

        {/* swiper-wrapper start */}
        <div className="swiper-wrapper">
          <SliderOne />
          <SliderTwo />
          <SliderThree />
        </div>
        {/* swiper-wrapper end */}

        {/* swiper-button-prev start */}
        <div className="swiper-button-prev-box fullscreen-slider-arrow after-preloader-anim">
          <div className="anim-fade">
            <div className="swiper-button-prev" />
          </div>
        </div>
        {/* swiper-button-prev end */}


        {/* swiper-button-next start */}
        <div className="swiper-button-next-box fullscreen-slider-arrow after-preloader-anim">
          <div className="anim-fade tr-delay-06">
            <div className="swiper-button-next" />
          </div>
        </div>{/* swiper-button-next end */}

        {/* swiper-pagination start */}
        <div className="pagination-box fullscreen-slider-pagination after-preloader-anim">
          <div className="anim-fade tr-delay-03">
            <div className="swiper-pagination counter-pagination" />
          </div>
        </div>
        {/* swiper-pagination end */}

      </section>
      {/* home slider end */}

    </>
  )
}

export default HomeSlider
