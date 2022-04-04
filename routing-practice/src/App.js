import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom'
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


const Form = (props) => {
  const [bgColor, setBgColor] = useState('')
  const [str, setStr] = useState('')
  const [color, setColor] = useState('')
  const [int, setInt] = useState('')
  const navigate = useNavigate();

  const handleBgColor = (e) => {
      setBgColor(e.target.value)
  }
  const handleColor = (e) => {
    console.log(e.target.value)
      setColor(e.target.value)
      console.log(color)
  }
  const handleStr = (e) => {

      setStr(e.target.value)
  }
  const handleInt = (e) => {
      setInt(e.target.value)
  }

  const sendSurvy = (e) =>{
      e.preventDefault();
      console.log(bgColor)
      navigate(`/${str}/${color}/${bgColor}`)

  }

  return(
      <form onSubmit={sendSurvy}>
          <label>BgColor</label>
          <input type='text' value={bgColor} onChange={handleBgColor}></input>
          <br></br>
          <label>Color</label>
          <input type='text' value={color} onChange={handleColor}></input>
          <br></br>
          <label>String</label>
          <input type='text' value={str} onChange={handleStr}></input>
          <br></br>
          <label>integer</label>
          <input type='number' value={int} onChange={handleInt}></input>
          <br></br>
          <button type='submit'>Submit</button>
      </form>
  )
}
const Formed = (props) =>{
  const {str, blue, red} = useParams()
  const style = {
    backgroundColor: `${red}`,
    color: `${blue}`
  }
  return(
    <h1 style={style}>{str}</h1>
  )
}

function App() {

  return (
    <BrowserRouter>
    <Form/>
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
        <Route path='/:str/:blue/:red' element={<Formed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
