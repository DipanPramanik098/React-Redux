import React from 'react'

const Card = (props) => {
    const handleNotInterested = () => {
        props.removeCard(props.place);
    }
  return (
    <div className='card'>
        <img src={props.image} alt="image" />
        <h3 className='price'>{props.price}</h3>
        <h2 className='place'>{props.place}</h2>
        <p className='about'>{props.about}</p>
        <button className='btn' onClick={handleNotInterested}>{props.btnVal}</button>
    </div>
  )
}

export default Card