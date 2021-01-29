import React from 'react'
import AboutInfiniteSlider from './AboutInfiniteSlider'
import AboutRightSide from './AboutRightSide'
import AboutLeftSide from './AboutLeftSide'


function About() {
    return (
        <>
          
<section id="down" className="pos-rel section-bg-dark-2">
  {/* pos-rel start */}
  <div className="pos-rel padding-top-bottom-120">
    {/* flex-container start */}
    <div className="container flex-container padding-bottom-70">

      <AboutLeftSide />
      <AboutRightSide />

    </div>{/* flex-container end */}



      <AboutInfiniteSlider />

  </div>{/* pos-rel end */}
</section>{/* about us end */}

        </>
    )
}

export default About
