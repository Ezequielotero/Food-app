import React,{ useState,useEffect } from 'react'; 
import {  useSelector, useDispatch } from "react-redux";
import './Detail.css'

export default function Detail() {
const detail =  useSelector(state => state.detail)
console.log(detail[0])
        {if(detail[0]?.flag){
            return(
                <div className='alll'>
                    <div className='bg'></div>
            <p className='name2'>{detail[0]?.name}</p>
            <p className='diets2'>Diets: {detail[0]?.diets}</p>
            <p className='dishTypes'>Dishtype: {detail[0]?.dishTypes}</p>
            <p className='healthy2'>Health score: {detail[0]?.healthy}</p>
            <p className='summary'>{detail[0]?.summary}</p>
            <p className='instructions'>{detail[0]?.instructions}</p>
            <p className='score2'>Score: {detail[0]?.score}</p>
            <img className='image' src={detail[0]?.img} alt="" />
        </div>
            )
        }
    } {if(!detail.flag){
        return(
            <div>
        <p>{detail[0]?.score}</p>
        <p>{detail[0]?.name}</p>
        <p>{detail[0]?.dishTypes}</p>
        <p>{detail[0]?.healthy}</p>
        <p>{detail[0]?.summary}</p>
        <p>{detail[0]?.instructions}</p>
        <img src={detail[0]?.img} alt="" />
    </div>
        )
    }
}
}
