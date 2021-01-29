import React from 'react'

function BlogHeader() {
    return (
        <>
            {/* pos-rel start */}
            <section id="up" className="pos-rel bg-img-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/blog-header-coffe-and-desk.jpg)' }}>
                {/* bg-overlay */}
                <div className="bg-overlay-black" />
                {/* lines-container start */}
                <div className="lines-container pos-rel anim-lines flex-min-height-100vh">
                    <div className="padding-top-bottom-120 width-100perc">


                        {/* title start */}
                        <h2 className="headline-xxxxl text-center hidden-box after-preloader-anim">
                            <span className="anim-slide">Read our <span className="text-color-red">Blog</span></span>

                        </h2>{/* title end */}

                        <div className="margin-top-60  text-center hidden-box after-preloader-anim">
                        <a href="#down" className="border-btn js-pointer-large anim-slide js-smooth-scroll">
                                <span className="border-btn__inner">Read more</span>
                                <span className="border-btn__lines-1" />
                                <span className="border-btn__lines-2" />
                            </a>
                        </div>





          
                    </div>
                </div>{/* lines-container end */}
            </section>{/* pos-rel end */}
        </>
    )
}

export default BlogHeader
