import React,{ useState,useEffect } from 'react'; 
import {  useSelector, useDispatch } from "react-redux";

export default function Detail() {
const detail =  useSelector(state => state.detail)
console.log(detail)
    return (
        <div>
            <p>{detail[0]?.name}</p>
            <p>{detail[0]?.dishTypes}</p>
            <p>{detail[0]?.healthy}</p>
            <p>{detail[0]?.summary}</p>
            <p>{detail[0]?.instructions}</p>
            <img src={detail[0]?.img} alt="" />
        </div>
    )
}
