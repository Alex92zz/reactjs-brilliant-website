import React from 'react'

function Two() {
    return (
        <>
                          {/* blog-entry start */}
                          <article className="padding-top-90">
                                    <div className="content-bg-light-2">
                                        <a href="post_dont-panic.html" className="d-block hover-box js-pointer-large js-animsition-link">
                                            <div className="hidden-box anim-overlay js-scrollanim">
                                                <img className="img-hover-scale" src="assets/images/BlogPage/Articles/blog-page-seo-article.jpg" alt="Post" />
                                            </div>
                                            <div className="margin-left-right-20 margin-top-20">
                                                <h3 className="headline-xxxs hover-move-right text-color-black">
                                                What is search engine optimisation (SEO)?
                                                    </h3><br />
                                                <p className="body-text-xs text-color-black margin-top-20 hover-move-right tr-delay-01">

                                                Search Engine Optimisation (SEO) is the practice of increasing the number and quality of visitors 
                                to a website by improving rankings in the algorithmic search engine results....

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
                                                <a href="#" className="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">15 January 2021</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>{/* blog-entry end */}
        </>
    )
}

export default Two
