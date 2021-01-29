import React from 'react'

function Stars() {
    return (
        <>
            <ul className="list list_row list_right list_margin-1px pos-abs pos-right-bottom-0px text-color-red">

                <li className="list__item anim-fade">
                    <i className="fas fa-star" />
                </li>
                <li className="list__item anim-fade tr-delay-01">
                    <i className="fas fa-star" />
                </li>
                <li className="list__item anim-fade tr-delay-02">
                    <i className="fas fa-star" />
                </li>
                <li className="list__item anim-fade tr-delay-03">
                    <i className="fas fa-star" />
                </li>
                <li className="list__item anim-fade tr-delay-04">
                    <i className="fas fa-star" />
                </li>

            </ul>
        </>
    )
}

export default Stars
