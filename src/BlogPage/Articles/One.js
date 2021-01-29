import React from 'react'

function One() {
    return (
        <>
            {/* blog-entry start */}
            <article className="padding-top-90">
                <div className="content-bg-light-2">
                    <a href="post_dont-panic.html" className="d-block hover-box js-pointer-large js-animsition-link">
                        <div className="hidden-box anim-overlay js-scrollanim">
                            <picture>
                                <img loading="lazy" className="img-hover-scale" src="assets/images/BlogPage/Articles/blog-page-marketing.jpg" alt="Post" />
                            </picture>

                        </div>
                        <div className="margin-left-right-20 margin-top-20">
                            <h3 className="headline-xxxs hover-move-right text-color-black">8 tips to improve your website</h3><br />
                            <p className="body-text-xs text-color-black margin-top-20 hover-move-right tr-delay-01">
                            Your business website may seem to function effectively enough, and you may even be getting a decent amount of 
                                conversions from the web traffic you manage to bring in...
                                </p>
                        </div>
                    </a>
                    <ul className="list list_row list_margin-30px padding-top-bottom-30 margin-left-right-20">
                        <li className="list__item">
                            <a href="#" className="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">By: Alex Zelea</a>
                        </li>
                        <li className="list__item">
                            <a href="#" className="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">In: SEO</a>
                        </li>
                        <li className="list__item">
                            <a href="#" className="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">7 January 2021</a>
                        </li>
                    </ul>
                </div>
            </article>{/* blog-entry end */}
        </>
    )
}

export default One
