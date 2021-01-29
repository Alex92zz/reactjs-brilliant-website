import React from 'react'

function SlideThree() {
    return (
        <>
            <div className="swiper-slide">

                <a className="d-block anim-img-scale js-pointer-large">
                    <picture>
                        <source type="image/webp" srcSet="assets/images/portfolio/verge-watch.webp" />
                        <img loading="lazy" className="anim-img-scale__inner" src="assets/images/portfolio/verge-watch.png" alt="web design watch website" />
                    </picture>

                </a>

            </div>
        </>
    )
}

export default SlideThree
