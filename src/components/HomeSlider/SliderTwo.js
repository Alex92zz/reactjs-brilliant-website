import React from 'react'

function SliderTwo() {
    return (
        <>
            <div className="swiper-slide">
                {/* slide-bg */}
                <div className="js-parallax-slide-bg bg-img-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/luca-bravo-ujhKqutt3f0-unsplash.jpg)' }} />
                {/* bg-overlay */}
                <div className="bg-overlay-black" />
                {/* content start */}
                <div className="flex-min-height-100vh pos-rel" data-swiper-parallax-x="30%">

                    <div className="container small text-center padding-top-bottom-120">
                        
                        <h2 className="headline-xl">
                            <span className="hidden-box d-block">
                                <span className="anim-slide tr-delay-02">We’re Providing</span>
                            </span>

                            <span className="hidden-box d-block">
                                <span className="anim-slide tr-delay-03">
                                    <span className="text-color-red">Best</span> Digital
                                </span>
                            </span>

                            <span className="hidden-box d-block">
                                <span className="anim-slide tr-delay-04 text-color-red">Services</span>
                            </span>
                        </h2>


                        <div className="margin-top-30 anim-fade tr-delay-08">
                        <a href="#down" className=" border-btn js-pointer-large js-smooth-scroll">
                                <span className="border-btn__inner">Read more</span>
                                <span className="border-btn__lines-1" />
                                <span className="border-btn__lines-2" />
                            </a>
                        </div>


                    </div>
                </div>{/* content end */}
            </div>
        </>
    )
}

export default SliderTwo
