import React from 'react'

const SideBar = () => {
    return (
        <div className="d-flex flex-column align-items-start p-1">
            <div className="d-flex flex-lg-column">
                <button className="btn light-yellow btn-sm"><i class="bi bi-bookmark"></i> Bookmarks</button>
                <button className="btn btn-sm mt-2"><i class="bi bi-list-ul"></i> Collections</button>
            </div>
            <hr className="w-75" />
            <div className="my-2">
                <p className="fw-bold lh-1 tag">TAGS</p>
                <small className="px-4 py-1 rounded light fw-bold">Select</small>

                <ul className="list-unstyled mt-4">
                    <li className="h6 fw-bold tag">TYPE</li>
                    <li className="m-3"><i class="bi bi-file-earmark-ppt"></i> Articles <span className="badge light text-dark rounded-pill pl-2">99</span> </li>
                    <li className="m-3"><i class="bi bi-journal"></i> Books <span className="badge light text-dark rounded-pill pl-2">6</span> </li>
                    <li className="m-3"><i class="bi bi-headphones"></i> Podcasts <span className="badge light text-dark rounded-pill pl-2">2</span> </li>
                    <li className="m-3"><i class="bi bi-people"></i> Social <span className="badge light text-dark rounded-pill pl-2">12</span> </li>
                    <li className="m-3"><i class="bi bi-film"></i> Videos <span className="badge light text-dark rounded-pill pl-2">20</span> </li>
                    <li className="m-3"><i class="bi bi-globe"></i> Websites <span className="badge light text-dark rounded-pill pl-2">35</span> </li>
                </ul>
                <ul className="list-unstyled mt-4">
                    <li className="h6 fw-bold tag">STATUS <i class="bi bi-info-circle"></i></li>
                    <li className="m-3"><i class="bi bi-inbox"></i> Inbox <span className="badge light text-dark rounded-pill pl-2">141</span> </li>
                    <li className="m-3"><i class="bi bi-play"></i> In Progress <span className="badge light text-dark rounded-pill pl-2">6</span> </li>
                    <li className="m-3"><i class="bi bi-check2-circle"></i> Done <span className="badge light text-dark rounded-pill pl-2">25</span> </li>
                    <li className="m-3"><i class="bi bi-archive"></i> Archive <span className="badge light text-dark rounded-pill pl-2">6</span> </li>
                </ul>
                <ul className="list-unstyled mt-4">
                    <li className="h6 fw-bold tag">VISIBILITY <i class="bi bi-info-circle"></i></li>
                </ul>
            </div>
            
        </div>
    )
}

export default SideBar
