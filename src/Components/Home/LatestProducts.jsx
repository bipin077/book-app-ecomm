import React, { useReducer } from 'react';
import {latestBooks} from "../../Data/Data";
import {useSelector,useDispatch} from 'react-redux';
import {updateCartItem} from "../../Redux/Action/Action";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
function LatestProducts() {
    const state=useSelector((state)=>state.addToCart);
    const dispatch=useDispatch();
    function cartHandler(books)
    {
        dispatch(updateCartItem(books));
        toast("Book Added In your Cart Successfully");
    }
    return (
        <>

            <div className="container mt-3">
                <h2 className='text-center'>Our Latest Books</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="latest-books d-flex">
                        {
                            latestBooks.map((books)=>
                                <SwiperSlide>
                                    <div className="card bg-success text-light m-2 text-center">
                                        <img className="card-img-top" src={books.image} alt="Card image" style={{ 'height':'200px','width':'100%'}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{books.book_name}</h5>
                                            <h6>Author : {books.author}</h6>
                                            <h3>$ {books.price}</h3>
                                        <button onClick={()=>cartHandler(books)} class="btn-warning mt-2">Add To Cart : <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </div>
                </Swiper>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable />

        </>
    )
}

export default LatestProducts;