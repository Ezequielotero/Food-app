import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import Hola from '../../Sharedcomponents/displayDiets'
import {getDiets} from '../../../actions/actions'
import './Form.css'
import Button from '../../Sharedcomponents/Button'
export default function Form() {
    const[state, setState]=useState({
name:'',
rating:'',
resume:'',
healthy:'',
steps:'',
    })
    const[diet,setDiets]=useState({
        diets:[]
    })
    const alldiets = useSelector((state)=> state.diets)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getDiets())
    },[])

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        }

        function handleChange2(e) {
            if (diet.diets.indexOf(e.target.value)===-1) {
                setDiets({
                    ...diet,
                    diets :diet.diets.concat(e.target.value)
                })
            }
            }
           async function handleSubmit(e){
                var todo={}
                await axios({
                        method:'post',
                        url:'http://localhost:3001/recipe',
                        data:
                        todo={
                            ...state,...diet
                        }
                        
                    })
                }
console.log(state)
    return ( 
        <div className='grid2'>
            
            <form className='form' onSubmit={handleSubmit}>
            <div className='back'></div>
            <p className='recipes'>CREATE YOUR RECIPES</p>
            <p className='recipes2'>AND</p>
            <p className='recipes3'>POST THEM ALL</p>
                <input name='name' className='name' placeholder='name' onChange={handleChange} type="text" />
                <label className='label2'>{state.rating}</label>
                <input  type="range" min="0" max="100" name='rating'className='score' onChange={handleChange} />
                <label className='label'>{state.healthy}</label>
                <input name='healthy' className='healthy' type="range" min="0" max="100" onChange={handleChange}  />
                <textarea name='steps' placeholder='all the steps' className='steps' onChange={handleChange} type="text" />
                <textarea name='resume' className='resume' rows="50" cols="40" placeholder='Recipe desciption' onChange={handleChange}/>
                <select className='select' placeholder='type of diet' multiple name="diets"  onChange={handleChange2} >
                    {
                        alldiets.map((diet=>{
                            return(
                            <option >{diet.name}</option>
                        )}))
                    }
                </select>
                <button className='submit'>Post recipes</button>
            </form>
            <div className='back'></div>
            <div>
            <Hola array={diet.diets}></Hola>
            </div>
        </div>
    )
                }