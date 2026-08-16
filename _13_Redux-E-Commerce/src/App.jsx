import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <NavBar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App