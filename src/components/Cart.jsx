import { useState } from "react";
import {Link} from 'react-router-dom'

function Cart({product, setProduct, handleChange}){
   console.log(product)

    const handleRemove = (id) => {
        console.log(id)
        const arr = product.filter((item) => {
            return item.id !== id
        })
        setProduct(arr)
    }

    return(
        <div className="App">
            <div className="row">
            {
                product.map(item => (
                    <div className='col-12 col-md-3 m-3 p-3' key={item.id}>
                        <div className="card">
                            <img src={item.image} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <h6 className="card-text"><strong>Price:</strong> {item.price}</h6>
                                <h6 className="card-text"><strong>Category: </strong>{item.category}</h6>
                                <button className='btn btn-danger m-3'
                                onClick={()=> handleRemove(item.id)}
                                >Remove to Cart</button>
                                <Link className='btn btn-warning' to="/cart">Cart</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div>
                <Link to="/products" className="btn btn-primary">Back to Products</Link>
            </div>
        </div>
    )
}

export default Cart;