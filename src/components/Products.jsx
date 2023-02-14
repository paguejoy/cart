import { useState } from 'react'
import Product from './Product';
import {PRODUCTS_DATA} from '../utils/product'

function Products({handleClick}){

    return(
        <div className='App m-5'>
            <h1>hi</h1>
            <div className='row'>
                {
                    PRODUCTS_DATA.map(item => {
                        // console.log(item)
                        return <Product key={item.id} item={item} handleClick={handleClick}/>
                    })
                }
            </div>
        </div>
    )
}

export default Products;