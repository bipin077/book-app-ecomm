import React, { useState } from 'react';
import { latestBooks } from "../../Data/Data";
import {useSelector,useDispatch} from "react-redux";
import {updateCartItem} from "../../Redux/Action/Action";

function Products() {
  const [books, setBooks] = useState(latestBooks);

  const state=useSelector((state)=>state.addToCart);
  const dispatch=useDispatch();

  function cartHandler(item)
  {
      dispatch(updateCartItem(item));
      alert("Add To Cart success");
  }

  return (
    <>
      <div className="container-fluid mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>
        <div className="row">
          {books ? books.map((book) =>
            <div className="col-sm-3 mt-3 text-center">
              <div className="card">
                <img className="card-img-top" src={book.image} style={{ 'width': '100%', 'height': '200px' }} alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">{book.book_name}</h4>
                  <h6>Author : {book.author}</h6>
                  <h3>$ {book.price}</h3>
                  <button onClick={()=>cartHandler(book)} className="btn-warning mt-2">Add To Cart : <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>

                </div>
              </div>
            </div>

          ) : 'no books found '}
        </div>
      </div>
    </>
  )
}

export default Products;