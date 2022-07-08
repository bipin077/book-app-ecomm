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
                <div className="row">
                    <div className="col-sm-6 p-5">
                        <ul>
                            <li>Address</li>
                            <li>Phone No</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label for="email">Yoour Name</label>
                            <input type="text" class="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="email">Phone</label>
                            <input type="tel" class="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="email">Message</label>
                            <textarea name="" id="" class="form-control" cols="30" rows="3"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;