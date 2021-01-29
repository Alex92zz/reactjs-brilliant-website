import React from 'react'
import Stars from './Stars'

function SliderTwo() {
    return (
        <>

            <div className="swiper-slide">
                <div className="margin-left-right-10">
                    <blockquote className="quote">
                        <p className="body-text-m">
                        I've been extremely impressed with the service and the website you've created for us.<br />
                         I will certainly be recommending you to others! <br />
                        Thanks for a great job!
                            
                            
                    </p>
                    </blockquote>
                    <div className="margin-top-20 margin-left-50">
                        <h5 className="subhead-m anim-text-double-fill tr-delay-01" data-text="Jacob B">Jacob B</h5><br />
                        <h6 className="headline-xxxxs margin-top-5 anim-text-double-fill invert tr-delay-03" data-text="Birmingham Fishmonger's">Birmingham Fishmonger's</h6>
                    </div>

                    <Stars />


                </div>
            </div>
        </>
    )
}

export default SliderTwo
