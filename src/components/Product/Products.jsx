import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import {products} from '../../data/products';

import './products.css'

export default function Products() {
    const [displayType,setDisplayType] = useState("protein");

    function createList(){
        const arr = products.map(product=>product.type);
        return ["all",...new Set(arr)];
    }


    return (
        <main id="products">
            <section className="product-section">
                <div className="product-list-container">
                    <div className='list-title'>Products</div>
                    <ul className="product-list">
                        {createList().map((item,index)=>{
                            return <div key={index} className='product-list-item' onClick={()=>{
                                setDisplayType(item);
                            }}>{item}</div>
                        })}
                    </ul>
                </div>
                <div className="products-container">
                    {products.filter(product=>displayType==="all"||displayType===product.type)
                    .map(product=>{
                        // if(displayType==="all"||displayType===product.type)
                        return <div className='product' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img className='product-thumbnail' src={product.image} alt={product.name}></img>
                            </Link>
                            <div className='name'>{product.name}</div>
                            <div className='price'>${product.price}</div>
                        </div>
                    })}
                </div>
            </section>
        </main>
    )
}
