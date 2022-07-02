import React from 'react';
import {aboutUs} from "../../Data/Data";

function About() {
  return (
    <>
    <div className="container mt-3">
  <h2 className='text-center'>{aboutUs.title}</h2>
  <div className="row">
    <div className="col-sm-12">
        <p>{aboutUs.description_one}</p>
        <p>{aboutUs.description_two}</p>
    </div>
  </div>
    </div>
    </>
  )
}

export default About;