import React, { useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {randomRecipe} from '../../actions/actions'
import './Card.css'
export default function Card() {
    const random = useSelector(state => state.random)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(randomRecipe())
    },[])
    console.log(random)
    return (
        <div className='card'>
            <p className='title'>{random.title}</p>
            <img className='img' src={random.img} alt="" />
        </div>
    )
}
