import React from 'react'
import './logo.css'
import {BiDish} from 'react-icons/bi'

const Logo = () => {
  return (
    <div className='main'>
        <BiDish className='img'/>
        <h1 className='text'>Recipes</h1>
    </div>
  )
}

export default Logo