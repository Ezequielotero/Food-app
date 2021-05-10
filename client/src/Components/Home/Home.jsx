import Button from '../Sharedcomponents/Button'
import {Link} from 'react-router-dom'
import React from 'react'

import Home3 from './Home3'
import './Home.css'


export default function Home() {
    return (
        <div>
        <div className='all1'>
            <p className='find'>Find any recipe you want!</p>
            <Link className='link' to='/hola'>
            <Button buttonStyle='btn-2'>Search recipes</Button>
            </Link>
        </div>
        <Home3></Home3>
        </div>
    ) 
}
