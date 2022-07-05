import React from 'react';
import {bestSeller} from "../../Data/Data";
import { useSelector,useDispatch } from 'react-redux';

import { Swiper, SwiperSlide } from "swiper/react"; 
import { updateCartItem } from "../../Redux/Action/Action";

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
        alert("add to cart success");
    }

    return (
        <>

            <div className="container mt-3">
                <h2 className='text-center'>Best Selling Books</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="latest-books d-flex">
                            { bestSeller.map((books)=>
                                <SwiperSlide>
                                    <div className="card bg-success text-light m-2 text-center">
                                        <img className="card-img-top" src={books.image} alt="Card image" style={{ 'height':'200px','width':'100%'}}/>
                                        <div className="card-body">
                                            <h4 className="card-title">{books.book_name}</h4>
                                            <h6>Author : {books.author}</h6>
                                            <h3>$ {books.price}</h3>
                                        <button onClick={()=>cartHandler(books)} class="btn-warning mt-2">Add To Cart : <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                    </div>
                </Swiper>
            </div>

        </>
    )
}

export default BestSeller;