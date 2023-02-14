import { useState } from 'react'
import '../App.css'
import {PRODUCTS_DATA} from '../utils/product'
import { Link } from 'react-router-dom'

function Product({item, handleClick}){
    // console.log(item)
    const {id, title, description, price, category, rating} = item
    const {rate, count} = rating

    return(
        <div className='col-12 col-md-3 m-3 p-3' key={id}>
            <div className="card">
                <img src={item.image} className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text"><strong>Price:</strong> {price}</h6>
                    <h6 className="card-text"><strong>Category: </strong>{category}</h6>
                    <div>
                        <span className='mx-4'><strong>Count: </strong> {rating.count}</span>
                        <span><strong>Rate: </strong>{rating.rate}</span>
                    </div>
                    <button className='btn btn-primary m-3'
                    onClick={()=> handleClick(item)}
                    >Add to Cart</button>
                    <Link className='btn btn-warning' to="/cart">Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Product;