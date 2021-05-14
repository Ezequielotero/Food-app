import React from 'react'
import Button from '../Sharedcomponents/Button'
import {Link} from 'react-router-dom'
import Card from '../Sharedcomponents/Randomcard'
import './Home3.css'

export default function Home3() {
    
    return (
        <div className='all3'>
            <div className='create2'>
            </div>
            <p className='create'>Create and post your own recipes</p>
            <p className='like'>Like this delicious:</p>
            <div className='card1'>
               <Card ></Card>
            </div>
            <Link className='link2' to='/hola'>
            <Button buttonStyle='btn-2'>Post recipes</Button>
            </Link>
        </div>
    )
}
