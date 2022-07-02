import React from 'react';
import {whyChooseUs} from "../../Data/Data";

function WhyChooseUs() {
    return (
        <>
            <div className="container mt-3 d-flex">
                {
                    whyChooseUs.map((items,i)=>
                        <div className="card bg-danger text-light m-2 text-center">
                        { items.icon }
                        <div className="card-body">
                            <h4 className="card-title">{items.title}</h4>
                            <p className="card-text">{items.subtitle}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default WhyChooseUs;