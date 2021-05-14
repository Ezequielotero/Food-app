import React from 'react'

import './DisplayDiets.css'
export default function DisplayDiets({array}) {
    return (
        <div className='all' >
            {
                
                        array.map((diet=>{
                            return(
                                <div className='diets'>
                            <input className='buton' value={diet} type='button'></input>
                            </div>

                        )}))
                    }
        </div>
    )
}
