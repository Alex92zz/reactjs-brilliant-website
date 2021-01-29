import React from 'react'

function PricingPremium() {
    return (
        <>
            

          {/* column start */}
          <div className="four-columns column-50-100 padding-top-60">
            <div className="column-l-r-margin-10 border-box border-radius-10px">
              <div className="text-center">
                <h3 className="subhead-s text-color-red padding-top-bottom-30">Premium</h3>
              </div>
              <h4 className="text-center content-bg-red padding-top-bottom-40">
                <span className="headline-l"> £575</span><br />
                <span className="subhead-xs" />
              </h4>
              {/* accordion start */}
              <div className="accordion accordion_underline js-accordion js-accordion-first-active margin-left-right-20 margin-top-bottom-50">
                {/* accordion__tab start */}
                <div className="accordion__tab js-accordion-tab">
                  <div className="accordion__btn js-accordion-btn js-pointer-large">
                    <h6 className="accordion__btn-title headline-xxxxs">Website Design</h6>
                  </div>
                  <div className="accordion__content js-accordion-content">
                    {/* list start */}
                    <ul className="list list_center subhead-xxs text-color-b0b0b0 margin-top-10">
                      <li className="list__item check red">1 - 6 pages </li>
                      <li className="list__item check red">Responsive web design</li>
                      <li className="list__item check red">Slideshow animation </li>
                      <li className="list__item check red">Eye-catching modern design</li>
                      <li className="list__item check red">Secure Contact Form</li>
                      <li className="list__item check red">Testimonial carousel</li>
                      <li className="list__item check red">Modern animations</li>
                    </ul>{/* list end */}
                  </div>
                </div>{/* accordion__tab end */}
                {/* accordion__tab start */}
                <div className="accordion__tab js-accordion-tab">
                  <div className="accordion__btn js-accordion-btn js-pointer-large">
                    <h6 className="accordion__btn-title headline-xxxxs">Hosting &amp; Domain</h6>
                  </div>
                  <div className="accordion__content js-accordion-content">
                    {/* list start */}
                    <ul className="list list_center subhead-xxs text-color-b0b0b0 margin-top-10">
                      <li className="list__item check red">24 months FREE hosting</li>
                      <li className="list__item check red">FREE domain name .co.uk</li>
                      <li className="list__item check red">FREE SSL Certificate included</li>
                      <li className="list__item check red">Up to 10 business emails</li>
                    </ul>{/* list end */}
                  </div>
                </div>{/* accordion__tab end */}
                {/* accordion__tab start */}
                <div className="accordion__tab js-accordion-tab">
                  <div className="accordion__btn js-accordion-btn js-pointer-large">
                    <h6 className="accordion__btn-title headline-xxxxs">Search Engine Optimisation</h6>
                  </div>
                  <div className="accordion__content js-accordion-content">
                    {/* list start */}
                    <ul className="list list_center subhead-xxs text-color-b0b0b0 margin-top-10">
                      <li className="list__item check red">Page submission to Google &amp; Bing</li>
                      <li className="list__item check red">
                        Links to social media</li>
                      <li className="list__item check red">Premium on-page SEO optimisation</li>
                      <li className="list__item check red">
                        Google Analytics</li>
                      <li className="list__item check red">Google Maps Listing</li>
                      <li className="list__item check red">Digital Visibility</li>
                    </ul>{/* list end */}
                  </div>
                </div>{/* accordion__tab end */}
                {/* accordion__tab start */}
                <div className="accordion__tab js-accordion-tab">
                  <div className="accordion__btn js-accordion-btn js-pointer-large">
                    <h6 className="accordion__btn-title headline-xxxxs">Web development</h6>
                  </div>
                  <div className="accordion__content js-accordion-content">
                    {/* list start */}
                    <ul className="list list_center subhead-xxs text-color-b0b0b0 margin-top-10">
                      <li className="list__item check red">Copper mug</li>
                      <li className="list__item check red">Vexillologist +1</li>
                      <li className="list__item check red">Prism iPhone</li>
                      <li className="list__item check red">Hella quinoa</li>
                      <li className="list__item check red">Blog af umami</li>
                      <li className="list__item check red">Vinyl snackwave</li>
                      <li className="list__item x opacity-05">XOXO drinking</li>
                    </ul>{/* list end */}
                  </div>
                </div>{/* accordion__tab end */}
              </div>{/* accordion end */}
              <div className="padding-bottom-40 text-center">
                <a href="#" className="ellipse-btn ellipse-btn_red js-pointer-large">sign up</a>
              </div>
            </div>
          </div>{/* column end */}


        </>
    )
}

export default PricingPremium
