import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {remove_cart_item} from "../../Redux/Action/Action";

function Cart() {
    const books = useSelector((books) => books.addToCart);
    const dispatch=useDispatch();
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <h4>There Are {books.totalItems} books in your cart.</h4>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Book Name</th>
                                    <th>Price</th>
                                    <th>Author</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.cart.length>0 ? books.cart.map((book) =>

                                        <tr>
                                            <td><img src={book.image} alt={book.book_name} style={{ 'width': '50px', 'height': '50px' }} /></td>
                                            <td>{book.book_name}</td>
                                            <td><code>$</code>{book.price}</td>
                                            <td>{book.author}</td>
                                            <td>1</td>
                                            <td><i onClick={()=>dispatch(remove_cart_item(book.id))} class="fa fa-trash" aria-hidden="true"></i></td>
                                        </tr>
                                    ) : <tr><td colSpan={6} className='text-danger'>Your Cart Is Empty.</td> </tr>
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-3 text-center mt-5'>
                        <h4>Total Items : {books.totalItems}</h4>
                        <h2><code>${books.totalPrice}</code></h2>
                        <button className='btn btn-success ps-5 pe-5 mt-3'><i class="fa fa-shopping-bag" aria-hidden="true"></i>  Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart;