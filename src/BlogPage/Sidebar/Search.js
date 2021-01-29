import React from 'react'

function Search() {
    return (
        <>
            {/* blog search start */}
            <div className="padding-bottom-90">
                <form className="form-search">
                    <input type="text" className="form-input black js-pointer-small" placeholder="Search..." />
                    <button className="search-btn black js-pointer-large" type="button"><i className="fas fa-search" /></button>
                </form>
            </div>
            {/* blog search end */}
        </>
    )
}

export default Search
