import './index.css'
import List from './final-products.json'
import React from 'react'
import Card from '../Card/Card'

export default function Navbar(){
    console.log(List)
    return (
        <div className='container'>
            {List.map(el => <Card key={el.id} el={el} active={false}/>)}
        </div>
    )
}