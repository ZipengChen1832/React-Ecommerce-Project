import React, {useRef,useState,useEffect} from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './product.css'
import * as DB from '../../utility/localstorage';
import * as db from '../../utility/realtimeDB';
import {products} from '../../data/products';
import {useAuth} from '../../authentication/AuthContext';

export default function Product() {

    const {currentUser} = useAuth(); 
    
    const [quantity,setQuantity] = useState(1);
    const [flavor, setFlavor] = useState();

    const navigate = useNavigate();
    const param = useParams();
    const location = useLocation();
    const id = param.id;
    
    const product = products.find(product=>product.id===id);

    function handleQuantity(e){
        let num = parseInt(e.target.value);
        if(num>10){
            alert("Cannot order more than 10 items!");
            return;
        }
        setQuantity(num);
    }

    function handleBlur(e){
        if(e.target.value==='') setQuantity(1);   
    }

    function handleSubmit(e){
        e.preventDefault(); 

        if(!currentUser){
            navigate("/signin",{state:{from:location}});
            return;
        }

        db.addCartItem(currentUser.uid,{id,quantity});
        alert("Order placed!")

        //setdefault
        setQuantity(1);
        setFlavor("vanilla");
    }


    return (
        <main id='product'>
            <section className="product-container">
                <div className='img-container'>
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-info">
                    <h1 className="title">{product.name}</h1>
                    <ul className="product-desc">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                    <h2 className="price">${product.price}</h2>

                    <form className='buy-product' onSubmit={handleSubmit}>
                    <div className='flavor-container'>
                        {product.type==="protein" &&
                        <>
                        <label htmlFor="flavor">Flavor</label>
                        <select className='flavor' name="flavor" onChange={(e)=>{
                            setFlavor(e.target.value);
                        }} value={flavor}>
                            <option value="vanilla">Vanilla</option>
                            <option value="chocolate">Chocolate</option>
                            <option value="strawberry">Strawberry</option>
                            <option value="banana">Banana</option>
                            <option value="mint">Mint</option>
                        </select>
                        </>}
                    </div>
                    <div className="buy">
                        <div className="quantity-container">
                            <button type="button" className="minus-btn" onClick={()=>{
                                if(quantity===1)return;
                                setQuantity(quantity-1);
                            }}>
                                {/* − */}
                                {"\u2212"}
                            </button>
                            <input type="number" className='quantity' value={quantity} 
                            onChange={handleQuantity} onBlur={handleBlur}/>
                            <button type="button" className="plus-btn" onClick={()=>{
                                if(quantity===10){
                                    alert("Cannot order more than 10 items!");
                                    return;
                                }
                                setQuantity(quantity+1)
                            }}>
                                +
                            </button>
                        </div>
                        <button type='submit' className='add-to-cart'>add to cart</button>
                    </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
