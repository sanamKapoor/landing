import React from 'react'
import { data } from '../Data/CardData';

const Cards = () => {
    return (
        data.map(d => (
        <div className="rounded shadow-sm my-3">
            <div className="d-flex justify-content-between align-items-center px-1 bg-light">
                <div className="left d-flex align-items-center">
                    <button className="rounded btn btn-sm border light fw-bold">{d.socialBtn}</button>
                    <button className="btn">{d.socialLink}</button>
                </div>
                <div className="right">
                    <button className="btn light btn-sm rounded-lg"><i class="bi bi-inbox"></i> Inbox</button>
                    <button className="btn light btn-sm rounded-lg mx-1"><i class="bi bi-lock"></i> Private</button>
                    <button className="btn light btn-sm rounded-lg"><i class="bi bi-three-dots"></i></button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-3">
                    <div className="card-img" style={{'background': `url(${d.image}) center center no-repeat`}}></div>
                </div>
                <div className="col-12 col-sm-7 col-md-8 col-lg-8 col-xl-9 py-2 px-3">
                    <h4 className="card-title">{d.title}</h4>
                    <p className="text-muted card-desc">{d.description}</p>
                    <div className="d-flex">
                    <div className="tags d-flex flex-column align-items-start">
                        {
                            d.listTags.map(t => (
                                <span style={{'width': '60px'}} class="badge light text-dark m-1"><i class="bi bi-dot"></i>{t}</span>
                            ))
                        }
                    </div>
                    <div className="tags d-flex flex-column align-items-start">
                        {
                            d.crossTags.map(c => (
                                <span class="badge light text-dark m-1">{c} <i class="bi bi-x"></i></span>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
         ))
    )
}

export default Cards
