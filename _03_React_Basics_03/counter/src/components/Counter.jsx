import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>

        <button style={{margin: "20px", padding: "20px 20px", backgroundColor:"black", color:"white"}}
            onClick={() => setCount(count+1)}
        >Increase</button>
        <button style={{margin: "20px", padding: "20px 20px", backgroundColor:"black", color:"white"}}
            onClick={() => count > 0 ? setCount(count-1) :setCount(count) }
        >Decrease</button>
        <button style={{margin: "20px", padding: "20px 20px", backgroundColor:"black", color:"white"}}
            onClick={() => setCount(0)}
        >Reset</button>
    </div>
  )
}

export default Counter