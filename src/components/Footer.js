import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>

      <section className="fixed-footer js-fixed-footer pos-rel bg-img-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/tianyi-ma-WiONHd_zYI4-unsplash.jpg)' }}>
        {/* bg-overlay */}
        <div className="bg-overlay-black" />
        {/* pos-rel start */}
        <div className="pos-rel">
          {/* container start */}
          <div className="container padding-top-bottom-120 text-center">
            <h2 className="headline-m">Order Your Impressive<br />Websites Now</h2>
            <div className="margin-top-30">

              <Link className="border-btn js-pointer-large" to="/contact">
                <span className="border-btn__inner">Get a quote</span>
                <span className="border-btn__lines-1" />
                <span className="border-btn__lines-2" />
              </Link>
            </div>
          </div>{/* container end */}
        </div>{/* pos-rel end */}
      </section>


    </>
  )
}

export default Footer
