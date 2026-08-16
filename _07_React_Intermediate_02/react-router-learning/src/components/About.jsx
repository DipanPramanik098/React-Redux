import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const handle = () => {
        navigate('/support');
    }
    const handle2 = () => {
        navigate(-1);
    }
  return (
    <div>
        <div>About</div>
        <button onClick={handle}>Move To Support Page</button>
        <button onClick={handle2}>Go Back</button>
    </div>
  )
}

export default About