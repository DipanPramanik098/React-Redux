import React from 'react'
import { useNavigate } from 'react-router-dom'
const Labs = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/about')
    }
  return (
    <div>
        <div>This Is Lab Page</div>
        <button onClick={clickHandler}>Move To About Page</button>
    </div>
  )
}

export default Labs