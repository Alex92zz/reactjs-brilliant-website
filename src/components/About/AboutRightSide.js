import React from 'react'
import AboutList from './AboutList'

function AboutRightSide() {
    return (
        <>
                  <div className="six-columns padding-bottom-20">
        <div className="column-l-r-margin-10">
          <p className="body-text-s anim-text-reveal js-scrollanim">
            Welcome to my page. I am Alex, a freelance web designer &amp; web developer. I live in Halesowen &amp; I created Brilliant
             Web Design in 2019 with the goal to build modern, beautiful and highly competitive websites.
            I work in collaboration with other professionals to exchange ideas, solutions and to produce the most
             efficient websites on the market.
            We work remotely which helps us cut unnecessary costs to be able to provide our clients with the best value 
            for money digital solutions.
            <br /><br />We are delighted that customers appreciate the high-quality solutions that our web design 
            company offers. You can expect to receive the very best of website design, web development, SEO solutions and
             digital marketing services. We mainly serve clients located in Birmingham, Quinton, Oldbury, Halesowen
              and surrounding areas. We also offer complimentary services such as website hosting, 
              graphic design and logo design. </p>
      

          <AboutList />


        </div>
      </div>{/* column end */}
        </>
    )
}

export default AboutRightSide
