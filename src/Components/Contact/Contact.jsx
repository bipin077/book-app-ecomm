import React from 'react';

function Contact() {
    return (
        <>
            <div className="container-fluid mt-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
                <section className="home-section new-cls">
                    <div className="section-heading text-center m-4">
                        <h2>Get in touch</h2>
                        <div className="hr"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 wow fadeInLeft animated">
                                <div className="padd_white">
                                    <h4 className="text-success">Information</h4>
                                    <p>Contact for additional information:</p>
                                    <p><i className="fa fa-envelope"></i>  <a href="mailto:info@bookstore.com">info@bookstore.com</a></p>
                                    <p><i className="fa fa-phone"></i>  <a href="tel:9927948007">9927948007</a></p>
                                    <h4>Location</h4>
                                    <p><i className="fa fa-map-marker"></i> We are located at : </p>
                                    <p> New Pachim Bihar, Moti lal nehru road, railway station, Delhi - 110033</p>
                                </div>
                            </div>
                        
                            <div className="col-md-8 col-sm-6 col-xs-12 wow fadeInLeft animated"  >
                                <form method="post">
                                    <div className="form-style row" id="contact_form">
                                        <div id="contact_results"></div>
                                            <div className="form-group col-sm-6">
                                            <input type="text" name="name" className="form-control input-field" placeholder="Name" required="" />
                                        </div>
                                        
                                        <div className="form-group col-sm-6">
                                        <input type="text" name="phone" className="form-control input-field" placeholder="Contact No." required="" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                        <input type="email" name="email" className="form-control input-field" placeholder="Email ID" required="" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                        <button type="submit" value="Submit" name="submitmsg" className="btn btn-default">Send Message</button>
                                        </div>				
                                    </div>
                                </form>
                            </div>
                        </div>	  
                    </div>   
                </section>
            </div>
        </>
    )
}

export default Contact;