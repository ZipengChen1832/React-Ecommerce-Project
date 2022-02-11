import React, {useState,useEffect} from 'react'
import './cart.css'
import { useAuth } from '../../authentication/AuthContext';
import * as DB from '../../utility/localstorage';
import * as db from '../../utility/realtimeDB.js';
import {products} from '../../data/products';

export default function Cart() {

    const {currentUser} = useAuth();
    const uid = currentUser.uid;

    const [items,setItems] = useState([]);
    const [subtotal,setSubtotal] = useState(0);

    const [alert,setAlert] = useState(false);

    useEffect(()=>{
        getItems();
    },[])

    async function getItems(){
        const cartItems = await db.getCartItems(uid);
        setItems(cartItems);
    }

    useEffect(calcSubtotal,[items]);

    function calcSubtotal(){
        let total = 0;
        items.forEach(item=>{
            const product = getProduct(item.id);
            total += product.price*item.quantity;
        })
        setSubtotal(total.toFixed(2));
    }

    function removeByIndex(itemIndex){
        const temp = items.filter((item,index)=>{
            if(itemIndex!==index) return item;
        });
        setItems(temp);
        db.removeByIndex(uid,itemIndex);
    }

    //updates quantity
    function updateByIndex(itemIndex,action){
        let temp = [...items];
        if(action==="minus"){
            if(temp[itemIndex].quantity===1) return;
            temp[itemIndex].quantity -= 1;
        } else if(action==="plus"){
            if(temp[itemIndex].quantity===10) return;
            temp[itemIndex].quantity += 1;
        }
        setItems(temp);
        db.updateCartItems(uid,temp);
    }

    return (
        <main id='cart'>

                <div className='mobile-banner'>
                    Shopping Cart
                </div>
            <table className='cart-items'>
                <tbody>
                <tr className='banner'>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            {items.map((item,index)=>{
                const product = getProduct(item.id);
                return <tr key={index} className='cart-item'>
                    <td className='item-info'>
                        <div className="item-img">
                            {product.image && <img src={product.image} alt={product.name}/>}
                        </div>
                        
                        <div className='item-desc'>
                            <div className='item-name'>{product.name}</div>
                            {product.type==="protein" && <div>Flavor: {item.flavor}</div>}
                            <div>Price: ${product.price}</div>
                                <div className='delete-btn' onClick={()=>{removeByIndex(index)}}>
                                    delete
                                </div>
                        </div>
                    </td>

                    <div className='mobile-quantity'>
                    <div className='quantity'>
                        <button onClick={()=>{updateByIndex(index,"minus")}}>−</button>
                        {item.quantity}
                        <button onClick={()=>{updateByIndex(index,"plus")}}>+</button> 
                    </div>
                        <div>${product.price*item.quantity}</div>
                    </div>
                    <td className='td-quantity'>
                        <div className='quantity'>
                            <button onClick={()=>{updateByIndex(index,"minus")}}>−</button>
                            {item.quantity}
                            <button onClick={()=>{updateByIndex(index,"plus")}}>+</button> 
                        </div>
                    </td>

                    <td className='item-price'>
                        <div>${(product.price*item.quantity).toFixed(2)}</div>
                    </td>
                </tr>
            })}
                </tbody>
            </table>
            <div className='payment'>

                <table className='total-price'>
                    <tbody>
                    <tr>
                        <td>Subtotal:</td> 
                        <td>${subtotal}</td> 
                    </tr>
                    <tr>
                        <td>Tax:</td> 
                        <td>${(subtotal*0.075).toFixed(2)}</td> 
                    </tr>
                    <tr>
                        <td>Total:</td> 
                        <td>${(subtotal*1.075).toFixed(2)}</td> 
                    </tr>
                    </tbody>
                </table>
                <button onMouseEnter={()=>{setAlert(true)}} onMouseLeave={()=>{setAlert(false)}} className='checkout-btn'>Proceed to Checkout</button>
                {alert && <div class="alert">Not available yet!</div>}
            </div>
        </main>
    )
}


function getProduct(id){
    return products.find(product=>product.id===id);
}