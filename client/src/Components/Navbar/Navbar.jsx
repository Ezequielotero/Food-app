import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className='nav'>
            <div className='searchb'>
            <Searchbar></Searchbar>
            </div>
        </div>
    )
}
