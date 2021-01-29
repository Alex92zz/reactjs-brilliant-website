import React from 'react'

function ContactForm() {
    return (
        <>
            

          {/* form section start */}
          <section id="contact-form" className="pos-rel bg-img-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/architecture-buildings-city-fog-373965.jpg)' }}>
            {/* bg-overlay */}
            <div className="bg-overlay-black" />
            {/* pos-rel start */}
            <div className="pos-rel flex-min-height-100vh">
              {/* container start */}
              <div className="container small padding-top-bottom-120 form-box">
                <h4 className="headline-xs text-center">Lets Get In Touch!</h4>





                {/* flex-container start */}
                <form action="mail.php" method="post" name="formobrsv" id="send_form" className="flex-container padding-top-90">
                  {/* column start */}
                  <div className="four-columns">
                    <div className="column-r-margin-10">
                      <input type="text" name="first_name" placeholder="Enter your name" id="first_name" required className="form-input js-pointer-small" />
                    </div>
                  </div>{/* column end */}
                  {/* column start */}
                  <div className="four-columns">
                    <div className="column-l-r-margin-5">
                      <input type="text" name="last_name" placeholder="Enter your last name" id="last_name" required className="form-input js-pointer-small" />
                    </div>
                  </div>{/* column end */}
                  {/* column start */}
                  <div className="four-columns">
                    <div className="column-l-margin-10">
                      <input type="email" name="email" placeholder="Enter your email address" id="email" required className="form-input js-pointer-small" />
                    </div>
                  </div>{/* column end */}
                  {/* column start */}
                  <div className="twelve-columns">
                    <textarea name="message" placeholder="Enter your message" id="message" required className="form-input js-pointer-small" defaultValue={""} />
                  </div>{/* column end */}
                  {/* column start */}
                  <div className="twelve-columns text-center padding-top-90">
                    <button id="send" className="border-btn js-pointer-large">
                      <span className="border-btn__inner">submit</span>
                      <span className="btn-wait">Wait</span>
                      <span className="border-btn__lines-1" />
                      <span className="border-btn__lines-2" />
                    </button>
                  </div>{/* column end */}
                </form>{/* flex-container end */}





              </div>{/* container end */}
              {/* alert start */}
              <div className="js-popup-fade" id="m_sent">
                <div className="js-popup">
                  <div className="popup-icon">
                    <i className="fas fa-check" />
                  </div>
                  <p className="popup-alert headline-xs">
                    Thank you!<br />
                    Your submission<br />
                    has been received!
                  </p>
                  <div className="js-popup-close js-pointer-large">
                    <div className="flip-btn" data-text="Close">Close</div>
                  </div>
                </div>
              </div>{/* alert end */}
              {/* alert start */}
              <div className="js-popup-fade" id="m_err">
                <div className="js-popup">
                  <div className="popup-icon">
                    <i className="fas fa-times" />
                  </div>
                  <p className="popup-alert headline-xs">Error</p>
                  <div className="js-popup-close js-pointer-large">
                    <div className="flip-btn" data-text="Close">Close</div>
                  </div>
                </div>
              </div>{/* alert end */}
            </div>{/* pos-rel end */}
          </section>{/* form section end */}
        </>
    )
}

export default ContactForm
