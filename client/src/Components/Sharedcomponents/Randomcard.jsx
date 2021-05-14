import React, { useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {randomRecipe} from '../../actions/actions'
import './Card.css'
export default function Card(props) {
    const random = useSelector(state => state.random)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(randomRecipe())
    },[])
    console.log(random)
    if(props){
    return (
        <div className='card'>
            <div className='band'></div>
            <p className='title'>{random.title}</p>
            <img className='img' src={random.img} alt="" />
        </div>
    )
    }
}