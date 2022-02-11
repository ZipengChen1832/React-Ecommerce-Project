import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import {heroInfo} from '../../data/data.js';

import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';

export default function Hero() {

    const [index,setIndex] = useState(0);
    function swipeLeft(e){
        if(index===0){
            setIndex(heroInfo.length-1);
            return;
        }
        setIndex(index-1);
    }
    function swipeRight(e){
        if(index===heroInfo.length-1){
            setIndex(0);
            return;
        }
        setIndex(index+1);
    }
    
    return (
        <div className="hero">
            <img src={heroInfo[index].image} alt="background image" className="hero-img" />
            <div className='hero-filter'></div>
            <div className="hero-info">
                <h1 className='hero-title'>{heroInfo[index].title}</h1>
                <div className='hero-desc'>{heroInfo[index].desc}</div>
                <div className='hero-shop-btn'>
                    <Link to="/products" >show now</Link>
                </div>
                </div>
            <button className="left-btn hero-btns" onClick={swipeLeft}>
                <AiOutlineLeft />
            </button>
            <button className="right-btn hero-btns" onClick={swipeRight}>
                <AiOutlineRight />
            </button>
        </div>
    )
}
