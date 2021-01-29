import React from 'react'

function AboutAuthor() {
    return (
        <>

            {/* about autor start */}
            <div className="padding-20 content-bg-light-2 text-center">
                <img src="assets/images/avatars/author/side-view-photography-of-a-woman-wearing-fedora-1070058.jpg" alt="Autor" />
                <h4 className="headline-xxxxs text-color-black margin-top-30">Evelyn Ennis</h4>
                <p className="body-text-xs text-color-black margin-top-20">Helvetica hella vexillologist, prism lo-fi activated charcoal iPhone thundercats irony meggings meh cardigan chartreuse</p>
                <ul className="list list_row list_center padding-top-30">
                    <li className="list__item">
                        <a href="#" className="icon-overlay-btn black js-pointer-large">
                            <i className="icon-overlay-btn__inner fab fa-instagram" />
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="icon-overlay-btn black js-pointer-large">
                            <i className="icon-overlay-btn__inner fab fa-twitter" />
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="icon-overlay-btn black js-pointer-large">
                            <i className="icon-overlay-btn__inner fab fa-facebook-f" />
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="icon-overlay-btn black js-pointer-large">
                            <i className="icon-overlay-btn__inner fab fa-youtube" />
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="icon-overlay-btn black js-pointer-large">
                            <i className="icon-overlay-btn__inner fab fa-behance" />
                        </a>
                    </li>
                </ul>
            </div>
            {/* about autor end */}
        </>
    )
}

export default AboutAuthor
