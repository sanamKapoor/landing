import React from 'react'

export const Buttons = () => {
    return(
        <div className="p-0 p-lg-1">
            <button className="light-yellow btn btn-sm m-1"><i className="bi bi-box"></i> <span className="ml-1">Manage Content</span></button>
            <button className="btn btn-sm m-1"><i className="bi bi-person"></i> <span className="ml-1">Your Profile</span></button>
            <button className="btn btn-sm m-1"><i className="bi bi-people"></i> <span className="ml-1">Discover People</span></button>
            <button className="light btn btn-sm m-1"><span className="mr-1">Shane Neubauer</span> <i className="bi bi-list"></i></button>
        </div>
    )
}

const Stripe = () => {
    return (
        <div className="d-none d-lg-flex justify-content-between align-items-center">
            <div></div>
            <Buttons />
        </div>
    )
}

export default Stripe
