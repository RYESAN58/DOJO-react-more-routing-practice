import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';


// const handleNum = (e) =>{
//   setnNum(e.target.value)
// }

// const handleStr = (e) => {
//   setStr(e.target.value)
// }

const Nummy = (props) => {
  const{ num } = useParams();

  return(
    <h1> this is the {num} </h1>
  )
}

const Home = (props) => {
  return( 
    <div>
      <h1> Welcome </h1>
      <link to='/selected/4'>number</link>
    </div>
  )}


const Form = (props) => {
  
  return(
    <div>not yet</div>
    // <form>
    //   <label>insert num</label>
    //   <input type='text' onchange={handleNum}></input>
    //   <label>Insert Word</label>
    //   <input type='text' onChange={handleStr}></input>
    //   <button type='submit'>
    //     GO!
    //   </button>
    // </form>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/selected/:num' element={<Nummy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
