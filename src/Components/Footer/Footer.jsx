import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-fluid bg-dark mt-3 p-3 text-light">
        <div className="row">
            <div className="col-sm-4">
                <h2 className='mb-4'> <i class="fa fa-book" aria-hidden="true"></i>  Book Store</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel ipsum modi distinctio quo, veniam voluptate labore perspiciatis incidunt ipsam reiciendis animi beatae quidem praesentium magni dolores amet aliquid veritatis eaque !</p>
            </div>
            <div className="col-sm-4 mt-4 text-center">
                <h4 className='mb-3'>Quick Links</h4>
                <ul className='list-inline'>
                    <li className='list-block-item'>Home</li>
                    <li className='list-block-item'>About Us</li>
                    <li className='list-block-item'>Latest Books</li>
                    <li className='list-block-item'>Contact Us</li>
                </ul>
            </div>
            <div className="col-sm-4 mt-4">
                <ul className='list-inline'>
                    <li className='list-block-item mb-3'><i class="fa fa-map-marker" aria-hidden="true"></i>  New Pachim Bihar, Moti lal nehru road, railway station, Delhi - 110033</li>
                    <li className='list-block-item mb-3'> <i class="fa fa-phone" aria-hidden="true"></i> Phone : +919999991111, +912233445566</li>
                    <li className='list-block-item mb-2'><i class="fa fa-envelope" aria-hidden="true"></i>  Email : name@cmpanydomain.com</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright bg-success text-center pb-1 pt-2 ">
        <p className="text-light">@2022 Copyright | Designed By Vipin Chauhan</p>
    </div>
    </>
  )
}

export default Footer