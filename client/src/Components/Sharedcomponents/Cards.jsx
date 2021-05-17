import React,{ useState,useEffect } from 'react'; 
import {  useSelector, useDispatch } from "react-redux";
import Card from './Card'
import {searchByName} from '../../actions/actions'
import './Cards.css'
export default function Cards() {
    const [filtered, setFiltered] = useState([]);
    const [order, setOrder] = useState([]);
    
    const AZ = (a, b) => {return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;}
    const ZA = (a, b) => {return b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1;}

    const SCOREUP = (a,b) => {return b.score - a.score}
    const SCOREDN = (a,b) => {return a.score - b.score}


    const searched = useSelector((state)=> state.searched)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(searchByName())
    },[])
    let searched1 = filtered.length > 0 ? filtered : searched

    function handleOrder(e){
        setOrder(e.target.value)
      }

      useEffect(() => {
        switch(order){
          case 'AZ': return setFiltered([...searched1].sort(AZ))
          case 'ZA': return setFiltered([...searched1].sort(ZA))
          case 'SCOREUP': return setFiltered([...searched1].sort(SCOREUP))
          case 'SCOREDN': return setFiltered([...searched1].sort(SCOREDN))
          default: return searched1
        }}, [order])

    const [page,setPage]=useState(0)
    const [max, setMax]=useState(50)

    const nextPage=()=> {page<max && setPage(page+9)}
    const prevPage=()=> {page>0 && setPage(page-9)}

    return (
        <div>
        <div className='flex'>
            {
                searched1.slice(page,page+9).map(food => <Card
                title={food.name}
                img={food.img}
                id={food.id}
                score={food.score}
                diets={food.diets}
                />)
            }
            </div>
            <div className= 'orders'>

            <select onChange={handleOrder} className= 'options'>
               <option value =''>ORIGINAL</option>
               <option value ='AZ'>AZ</option>
              <option value ='ZA'>ZA</option>
              <option value ='SCOREUP'>SCOREUP+</option>
              <option value ='SCOREDN'>SCOREDN-</option>
            </select>

        </div>
            <div className='pagination'>
            <button onClick={prevPage}>{'<--'}</button>
            <button onClick={nextPage}>{'-->'}</button>
            </div>
            </div> 
    )
}
