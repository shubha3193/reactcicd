import { useState } from 'react'
import './App.css'
import Header from './ecommerce/Header.tsx/Header';

function App(){
  const [count,setCount] = useState<number>(0);

  return(
    <>
        <Header title='Home'/>
      <div>
        <div>
        <h1>Hello React + Typescript  ++</h1>
        
        <p>Count: {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
      </div>
    </>
  )
}

export default App;
