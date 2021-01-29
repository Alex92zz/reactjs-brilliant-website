import React from 'react'
import ArticleOne from './ArticleOne'
import ArticleTwo from './ArticleTwo'
import ArticleThree from './ArticleThree'

function Blog() {
    return (
        <>
              {/* latest news start */}
    <section id="blog" className="lines-section pos-rel black-lines section-bg-light-2" data-midnight="black">
      {/* lines-container start */}
      <div className="lines-container pos-rel no-lines padding-top-bottom-120">
        {/* container start */}
        <div className="container small">


          {/* title start */}
          <h2 className="headline-xl text-center padding-bottom-30 js-scrollanim">
            <span className="text-color-black anim-text-fill" data-text="From">From</span>
            <span className="text-color-black anim-text-fill tr-delay-02" data-text="the">the</span>
            <span className="text-color-red anim-text-fill tr-delay-04" data-text="Blog">Blog</span>
          </h2>{/* title end */}

        <ArticleOne />
        <ArticleTwo />
        <ArticleThree />



        </div>{/* container end */}
      </div>{/* lines-container end */}
    </section>{/* latest news end */} 
        </>
    )
}

export default Blog
