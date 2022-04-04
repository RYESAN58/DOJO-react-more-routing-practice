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
    <h1> This is the { num } </h1>
  )
}
const Stringer = (props) => {
  const {word} = useParams();
  return(
    <h1>the word is  {word}</h1>
  )
}
const Home = (props) => {
  return( 
    <div>
      <h1> Welcome </h1>
    </div>
  )}

  const Location = (props) => { 
    const { city } = useParams();
      
    return (
      <h1>Welcome to { city }!</h1>
    );
  }
  const Colored = (props) => {
    const {blue , red} = useParams() 
    const style = {
      backgroundColor: `${red}`,
      color: `${blue}`
    }
    return(
      <h1 style={style}>Hello</h1>
    )
  }

function App() {

  return (
    <BrowserRouter>
      <p>
      <Link to= '/selected/1'>1</Link>
        |
      <Link to= '/selected/2'>2</Link>
        |
      <Link to= '/selected/3'>3</Link>
      |
      <Link to= '/selected/4'>4</Link>
      |
      <Link to= '/selected/5'>5</Link>
      |
      <Link to= '/selected/6'>6</Link>
      |
      <Link to= '/selected/7'>7</Link>
      |
      <Link to= '/selected/8'>8</Link>
      |
      <Link to= '/selected/9'>9</Link>
      </p>
      <p>
      <Link to= '/hello'>Hello</Link>
        |
      <Link to= '/Bye'>Bye</Link>
        |
      <Link to= '/Ryan'>Ryan</Link>
      |
      <Link to= '/Book'>Book</Link>
      |
      <Link to= '/Look'>Look</Link>
      |
      <Link to= '/Drake'>Drake</Link>
      |
      <Link to= '/plus'>plus</Link>
      |
      <Link to= '/wedding'>Wedding</Link>
      |
      <Link to= '/Jump'>jump</Link>
      <Link to = '/hello/blue/red'>Colored</Link>
      </p>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/selected/:num' element={<Nummy/>}/>
        <Route path="/location/:city" element={<Location />}/>
        <Route path='/:word' element={<Stringer/>}/>
        <Route path='/hello/:blue/:red' element={<Colored/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
