import React from 'react'

function Categories() {
    return (
        <>

            {/* categories start */}
            <div className="padding-bottom-90 text-center">
                <h4 className="subhead-m text-color-black padding-bottom-30">Categories</h4>
                <ul className="list list_center list_margin-20px">
                    <li className="list__item">
                        <a href="#" className="flip-btn text-color-black js-pointer-small" data-text="Art (8)">Art (8)</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="flip-btn text-color-black js-pointer-small" data-text="Production (25)">Production (25)</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="flip-btn text-color-black js-pointer-small" data-text="Culture (14)">Culture (14)</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="flip-btn text-color-black js-pointer-small" data-text="Management (24)">Management (24)</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="flip-btn text-color-black js-pointer-small" data-text="Design (48)">Design (48)</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="flip-btn text-color-black js-pointer-small" data-text="Illustration (41)">Illustration (41)</a>
                    </li>
                </ul>
            </div>
            {/* categories end */}
        </>
    )
}

export default Categories
