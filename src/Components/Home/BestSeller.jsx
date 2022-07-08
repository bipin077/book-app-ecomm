import React from 'react';
import {bestSeller} from "../../Data/Data";
import { useSelector,useDispatch } from 'react-redux';

import { Swiper, SwiperSlide } from "swiper/react"; 
import { updateCartItem } from "../../Redux/Action/Action";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function BestSeller() {
    const myState=useSelector((state)=>state.addToCart); // call reducer function here.... it will return current state
    const dispatch=useDispatch();

    function cartHandler(books)
    {
        dispatch(updateCartItem(books));
        console.log(myState);
        toast("Book Added In your Cart Successfully");
    }

    return (
        <>

            <div className="container mt-3">
                <h2 className='text-center'>Best Selling Books</h2>
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
                    <div className="latest-books">
                            { bestSeller.map((books)=>
                                <SwiperSlide>
                                    <div>
                                        <div className='card bg-success text-light m-2 text-center'>
                                            <img className="card-img-top" src={books.image} alt="Card image" style={{ 'height':'200px','width':'100%'}}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{books.book_name}</h5>
                                                <h6>Author : {books.author}</h6>
                                                <h3>$ {books.price}</h3>
                                                <button onClick={()=>cartHandler(books)} class="btn-warning mt-2">Add To Cart : <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
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

export default BestSeller;