import React from 'react'
import PricingBasic from './PricingBasic'
import PricingPremium from './PricingPremium'
import PricingEcommerce from './PricingEcommerce'

function Pricing() {
    return (
        <>
    <section id="pricing" className="pos-rel section-bg-dark-2">
      {/* pos-rel start */}
      <div className="pos-rel padding-top-bottom-120">

          
        {/* title start */}
        <h2 className="headline-xxl text-center js-scrollanim">
          <span className="anim-text-double-fill invert" data-text="Pricing">Pricing</span>
          <span className="anim-text-double-fill tr-delay-02" data-text="Table">Table</span>
        </h2>{/* title end */}


        {/* flex-container start */}
        <div className="container small flex-container flex-justify-center padding-top-30">

        <PricingBasic />

        <PricingPremium />

        <PricingEcommerce />

        </div>{/* flex-container end */}
      </div>{/* pos-rel end */}
    </section>{/* pricing end */}

        </>
    )
}

export default Pricing
