import React,{useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';

function Header() {
<<<<<<< HEAD
    const cartItems=useSelector((state)=>state.addToCart);
=======
    const myState=useSelector((state)=>state.addToCart);
    
>>>>>>> 9c131f6b0a5714f98d0ee501e294a8dd1cad7f51
    return (
        <>
            <div className="top-header d-flex justify-content-between bg-success text-light p-1 text-center">
                <div className="text-class">
                <h6 className="m-2">Welcome To Online Book Store</h6>
                </div>
                
                <div className="icons me-5 text-center">
                    <ul className='list-inline mt-1'>
                    <Link to="/login"><li className='list-inline-item'>Login</li></Link> | 
                    <Link to="/signup"><li className='list-inline-item ps-2'>Sign Up</li></Link>
<<<<<<< HEAD

                        <li className='list-inline-item ps-4'>Cart({cartItems})</li>
=======
                    <Link to="/cart"><li className='list-inline-item ps-4'>Cart({myState.totalItems})</li></Link>
>>>>>>> 9c131f6b0a5714f98d0ee501e294a8dd1cad7f51
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" ><i class="fa fa-book" aria-hidden="true"></i> Books App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/about" className="nav-link" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/books" className="nav-link" >Latest Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search Book Here..." />
                            <button className="btn btn-warning" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;