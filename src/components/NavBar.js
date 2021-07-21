import React from 'react'
import SideBar from './SideBar'
import { Buttons } from './Stripe'

const NavBar = () => {
    return (
        <>
        <nav class="d-block d-lg-none navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <h5>Logo</h5>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
        <div class="p-2 d-block d-lg-none">
            <Buttons />
            <SideBar />
        </div>
        </div>
        </>
    )
}

export default NavBar
