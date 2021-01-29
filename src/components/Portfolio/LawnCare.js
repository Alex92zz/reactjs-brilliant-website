import React from 'react'

function LawnCare() {
    return (
        <>
            <div className="swiper-slide">

                <a className="d-block anim-img-scale js-pointer-large">
                    <picture>
                        <source type="image/webp" srcSet="assets/images/portfolio/lawn-care.webp" />
                        <img loading="lazy" className="anim-img-scale__inner" src="assets/images/portfolio/lawn-care.png" alt="web design lawn care website" />
                    </picture>

                </a>

            </div>
        </>
    )
}

export default LawnCare
