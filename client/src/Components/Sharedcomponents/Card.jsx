import React, { useState, useEffect} from 'react'
import {  useSelector, useDispatch } from "react-redux";
import {getDetails} from '../../actions/actions'
import {Link} from 'react-router-dom'
import './Card.css'
export default function Card(props) {
    let dispatch = useDispatch()
     function handleClick(){
         dispatch(getDetails(props.id))
     }
        return (
            <div className='card'>
                <div className='band'></div>
                <Link className='title' to='/detail'>
                <p onClick={handleClick}>{props.title}</p>
                </Link>
                <img className='img' src={props.img} alt="" />
            </div>
        )
    }

