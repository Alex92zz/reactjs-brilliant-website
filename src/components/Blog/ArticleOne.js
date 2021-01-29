import React from 'react'

function ArticleOne() {
    return (
        <>
            <article className="flex-container flex-align-center padding-top-30">

                <div className="four-columns column-100-100 padding-top-30">
                    <a href="post_dont-panic.html" className="d-block hover-box js-pointer-large js-animsition-link">
                        <div className="anim-img-scale anim-img-scale_hover js-img-scale">
                            <picture>
                                <img loading="lazy" className="anim-img-scale__inner" src="assets/images/blog/tips-to-improve-website.jpg" alt="Post" />
                            </picture>
                        </div>
                    </a>
                </div>

                <div className="eight-columns column-100-100 padding-top-30">
                    <div className="column-l-margin-40-999 anim-fade js-scrollanim">
                        <ul className="list list_row list_margin-30px">
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
                        <a href="post_dont-panic.html" className="margin-top-bottom-30 d-block js-pointer-large js-animsition-link">
                            
                            <h3 className="headline-xxxs text-color-black">8 tips to improve your website </h3>
                            <p className="body-text-xs margin-top-20 text-color-black">
                                
                                Your business website may seem to function effectively enough, and you may even be getting a decent amount of 
                                conversions from the web traffic you manage to bring in...
                                </p>
                        </a>
                        <a href="post_dont-panic.html" className="skew-btn js-pointer-large js-animsition-link">
                            <span className="skew-btn__box">
                                <span className="skew-btn__content text-color-black">Continue reading</span>
                                <span className="skew-btn__arrow black" />
                            </span>
                        </a>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ArticleOne
