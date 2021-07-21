import React from 'react'

const Search = () => {
    return (
        <div className="row g-0">
            <div className="col-12 col-sm-8 col-md-9 col-xl-10">
                <input type="text" name="" className="form-control form-control-sm light" placeholder="Paste any URL here and hit enter to save it" />
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-between mt-2 mt-sm-0">
            <button className="btn btn-sm btn-primary px-4 mx-sm-1">Add</button>
            <div className="icons d-flex align-items-center ml-3">
                <span className="light py-1 px-2 rounded-circle mx-1">
                    <i class="bi bi-search"></i>
                </span>
                <span className="light py-1 px-2 rounded-circle mx-1">
                    <i class="bi bi-arrow-down-short"></i>
                </span>
            </div>
            </div>
        </div>
    )
}

export default Search
