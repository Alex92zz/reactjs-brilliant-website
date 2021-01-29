import React from 'react'
import One from './Articles/One'
import Two from './Articles/Two'
import Three from './Articles/Three'
import Four from './Articles/Four'
import Navbar from '../components/Navbar/Navbar'
import AboutAuthor from './Sidebar/AboutAuthor'
import Search from './Sidebar/Search'
import Categories from './Sidebar/Categories'
import RecentPosts from './Sidebar/RecentPosts'
import TagClouds from './Sidebar/TagClouds'
import Instagram from './Sidebar/Instagram'
import BlogHeader from './BlogHeader'

import Footer from '../components/Footer'

function BlogPage() {
    return (
        <>

            <Navbar />
            {/* main start */}
            <main className="js-animsition-overlay" data-animsition-overlay="true">

                <BlogHeader />

                {/* blog start */}
                <div id="down" className="pos-rel section-bg-light-1" data-midnight="black">
                    {/* pos-rel start */}
                    <div className="pos-rel padding-top-30 padding-bottom-120">
                        {/* flex-container start */}
                        <div className="container flex-container">

                            {/* blog column start */}
                            <div className="eight-columns column-100-100">
                                <One />
                                <Two />
                                <Three />
                                <Four />
                            </div>
                            {/* blog column end */}

                            {/* sidebar column start */}
                            <aside className="four-columns column-100-100 padding-top-90">
                                {/* column-l-margin-40-999 start */}
                                <div className="column-l-margin-40-999">

                                    <AboutAuthor />
                                    {/* padding-top-60 start */}
                                    <div className="padding-top-60">
                                        {/* content-bg-light-2 start */}
                                        <div className="padding-20 content-bg-light-2">

                                            <Search />
                                            <Categories />
                                            <RecentPosts />
                                            <TagClouds />
                                            <Instagram />

                                        </div>{/* content-bg-light-2 end */}
                                    </div>{/* padding-top-60 end */}
                                </div>{/* column-l-margin-40-999 end */}
                            </aside>{/* sidebar column end */}
                        </div>{/* flex-container end */}
                    </div>{/* pos-rel end */}
                </div>{/* blog end */}
            </main>{/* main end */}

            <Footer />

        </>
    )
}

export default BlogPage
