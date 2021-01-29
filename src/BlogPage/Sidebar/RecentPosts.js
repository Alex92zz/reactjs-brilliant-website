import React from 'react'

function RecentPosts() {
    return (
        <>
               {/* recent posts start */}
               <div className="padding-bottom-30">
                                                <h4 className="subhead-m text-color-black text-center padding-bottom-30">Recent posts</h4>
                                               
                                               
                                               
                                                {/* post start */}
                                                <div className="padding-bottom-60">
                                                    <a href="post_good-morning.html" className="d-block hover-box js-pointer-large js-animsition-link">
                                                        <div className="hidden-box">
                                                            <img className="img-hover-scale" src="assets/images/posts/good-morning/beans-beverage-black-coffee-breakfast-373888.jpg" alt="Post" />
                                                        </div>
                                                        <h5 className="headline-xxxxs text-color-black margin-top-10 hover-move-right">Good morning!<br />Have a nice day</h5>
                                                    </a>
                                                </div>{/* post end */}


                                                {/* post start */}
                                                <div className="padding-bottom-60">
                                                    <a href="post_dont-panic.html" className="d-block hover-box js-pointer-large js-animsition-link">
                                                        <div className="hidden-box">
                                                            <img className="img-hover-scale" src="assets/images/posts/dont-panic/adult-beautiful-blur-casual-374703.jpg" alt="Post" />
                                                        </div>
                                                        <h5 className="headline-xxxxs text-color-black margin-top-10 hover-move-right">Don't panic. Don't panic.<br />Don't panic.</h5>
                                                    </a>
                                                </div>{/* post end */}
                                                {/* post start */}
                                                <div className="padding-bottom-60">
                                                    <a href="post_red-cars.html" className="d-block hover-box js-pointer-large js-animsition-link">
                                                        <div className="hidden-box">
                                                            <img className="img-hover-scale" src="assets/images/posts/red-cars/close-up-photo-of-car-rims-2811496.jpg" alt="Post" />
                                                        </div>
                                                        <h5 className="headline-xxxxs text-color-black margin-top-10 hover-move-right">Do red cars cost<br />more to insure</h5>
                                                    </a>
                                                </div>{/* post end */}
                                            </div>
                                            {/* recent posts end */}
        </>
    )
}

export default RecentPosts
