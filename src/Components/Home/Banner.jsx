import React from 'react';
import {Banners} from "../../Data/Data";
import "./Home.css";

function Banner() {
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    { 
                        Banners.map((banner,i)=>

                            i==0 ? 
                                <button type="button" data-bs-target="#demo" data-bs-slide-to={i} className="active"></button>
                                :
                                <button type="button" data-bs-target="#demo" data-bs-slide-to={i}></button>
                        )
                    }
                </div>

                
                <div className="carousel-inner">
                    { Banners.map((banner,i)=>
                        i==0 ? 
                        <div className="carousel-item active">
                            <img src={banner.image} alt="Los Angeles" className="d-block" style={{'width':'100%','height':'400px' }} />
                        </div> : 
                        <div className="carousel-item">
                            <img src={banner.image} alt="Los Angeles" className="d-block" style={{'width':'100%','height':'400px' }} />
                        </div> 
                    )}
                </div>

                
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}

export default Banner;