import React from 'react'
import { tab } from '../Export'
import './carte.css';

const Carte = () => {
  return (
    <div>
        <h1 className='h1'>Our Best-Sellers</h1>
    <div className='cardcontainer'>      
        {tab.map(el=>
      <div className="card">
      <img className="card-img" src={el.imageurl} alt={el.name} />
      <div className="card-body">
        <h2 className="card-title">{el.name}</h2>
        <p className="card-text">
          Price: {el.price} <br />
          Discount: {el.remise}% <br />
        </p>
        <p className="final-price">{el.price - (el.price * el.remise) / 100} dt</p>
        <button className="card-button">Go somewhere</button>
      </div>
    </div>
        )}
    </div>
    </div>
  )
}

export default Carte
