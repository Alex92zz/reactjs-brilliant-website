import React from 'react'
import Stars from './Stars'

function SliderThree() {
    return (
        <>
            <div className="swiper-slide">
                <div className="margin-left-right-10">
                    <blockquote className="quote">
                        <p className="body-text-m">
                            
                        Excellent service. I was impressed with the quality of web design service delivered <br />in a short amount of time.
                         I would be happy to continue to work with Brilliant Web Design for future projects and certainly recommend them to others.<br/>
                         Keep up the good work! 
                            
                        </p>
                    </blockquote>

                    <div className="margin-top-20 margin-left-50">
                        <h5 className="subhead-m anim-text-double-fill tr-delay-01" data-text="Vasile Z">Vasile Z</h5><br />
                        <h6 className="headline-xxxxs margin-top-5 anim-text-double-fill invert tr-delay-03" data-text="Zelea Massage Therapy">Zelea Massage Therapy</h6>
                    </div>

                    <Stars />

                </div>
            </div>
        </>
    )
}

export default SliderThree
