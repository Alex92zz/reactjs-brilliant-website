import React from 'react'

function SlideTwo() {
    return (
        <>
            <div className="swiper-slide">
                
                <a  className="d-block anim-img-scale js-pointer-large">
                    <picture>
                    <source type="image/webp" srcSet="assets/images/portfolio/pro-gym-fitness.webp" />
                        <img loading="lazy" className="anim-img-scale__inner" src="assets/images/portfolio/pro-gym-fitness.png" alt="web design gym website" />
                    </picture>

                </a>

            </div>
        </>
    )
}

export default SlideTwo
