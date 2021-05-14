import React,{ useState,useEffect } from 'react'; 
import {  useSelector, useDispatch } from "react-redux";
import Card from './Card'
import {searchByName} from '../../actions/actions'
import './Cards.css'
export default function Cards() {

    const searched = useSelector((state)=> state.searched)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(searchByName())
    },[])
    const [page,setPage]=useState(0)
    const [max, setMax]=useState(45)

    const nextPage=()=> {page<max && setPage(page+9)}
  const prevPage=()=> {page>0 && setPage(page-9)}
  
    return (
        <div>
        <div className='flex'>
            {
                searched.slice(page,page+9).map(food => <Card
                title={food.name}
                img={food.img}
                id={food.id}
                />)
            }
            </div>
            <div className='pagination'>
            <button onClick={prevPage}>{'<--'}</button>
            <button onClick={nextPage}>{'-->'}</button>
            </div>
            </div> 
    )
}
