import React from 'react'
import Stars from './Stars'

function SliderOne() {
    return (
        <>

            <div className="swiper-slide">
                <div className="margin-left-right-10">
                    <blockquote className="quote">
                        <p className="body-text-m">The design was great. Exactly what I had looking for for a long time. I am far from an expert in html but it was easy for me to tailor the design to my needs.<br />But maybe the bet part of my experience was the support. 5* support. Very quick, friendly and professional. All my issues were resolved very quickly.<br />Thank you for your great work and enabling me to have a super cool website!</p>
                    </blockquote>
                    <div className="margin-top-20 margin-left-50">
                        <h5 className="subhead-m anim-text-double-fill tr-delay-01" data-text="David H">David H</h5><br />
                        <h6 className="headline-xxxxs margin-top-5 anim-text-double-fill invert tr-delay-03" data-text="Coleshill Pressure Washing">Coleshill Pressure Washing</h6>
                    </div>
                     
                    <Stars />

                </div>
            </div>
        </>
    )
}

export default SliderOne
