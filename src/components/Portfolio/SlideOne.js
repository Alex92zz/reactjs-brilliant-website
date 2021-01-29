import React from 'react'

function SlideOne() {
    return (
        <>
        
            <div className="swiper-slide">
               
                <a className="d-block anim-img-scale js-pointer-large">
                    <picture>
                    <source type="image/webp" srcSet="assets/images/portfolio/restaurant.webp" />
                        <img loading="lazy" className="anim-img-scale__inner" src="assets/images/portfolio/restaurant.png" alt="portfolio restaurant web design seo halesowen" />
                    </picture>
                </a>
                
            </div>

        </>
    )
}

export default SlideOne
