import React from 'react';
import {whyChooseUs} from "../../Data/Data";

function WhyChooseUs() {
    return (
        <>
            <div className="container mt-3 whychooseus">
                <div className='row'>
                {
                    whyChooseUs.map((items,i)=>
                        <div className=" col-12 col-sm-6 col-lg-3"> 
                        <div className='card bg-danger text-light text-center  cart-whychoose mt-3' style={{'height':'250px'}}>
                        { items.icon }
                        <div className="card-body">
                            <h4 className="card-title">{items.title}</h4>
                            <p className="card-text">{items.subtitle}</p>
                        </div>
                        </div>
                    </div>
                    )
                }
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;