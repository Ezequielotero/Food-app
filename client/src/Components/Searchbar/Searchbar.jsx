import React, {useState} from 'react'
import {searchByName} from '../../actions/actions'
import { useDispatch} from 'react-redux';
export default function Searchbar() {
    let dispatch=useDispatch()
    const [state, setState] = useState("")
    function handleChange(e){
        setState(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchByName(state))
    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" onChange={(e)=>handleChange(e)} />
                <input type="submit" value='Search'/>
            </form> 
        </div>
    )
    }
