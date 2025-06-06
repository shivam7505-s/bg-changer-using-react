import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color ,setColor] = useState("olive")

  return (
    
     <div
       className='w-full h-screen duration-200'
       style={{ backgroundColor: color }}
     >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("red")}
        className='outline-none px-4 rounded-full shadow-lg' style={{background:"red"}}
        >Red</button>
        <button onClick={() => setColor("green")}
        className='outline-none px-4 rounded-full shadow-lg' style={{background:"green"}}
        >Green</button>
        <button onClick={() => setColor("blue")}
        className='outline-none px-4 rounded-full shadow-lg' style={{background:"blue"}}
        >Blue</button>
        <button onClick={() => setColor("white")}
        className='outline-none px-4 rounded-full shadow-lg' style={{background:"white"}}
        >White</button>
        <button onClick={() => setColor("black")}
        className='outline-none px-4 rounded-full shadow-lg' style={{background:"black", color:"white"
        }}
        >Black</button>
        <button onClick={() => setColor("yellow")}
        className='outline-none px-4 rounded-full shadow-lg' style={{background:"yellow"}}
        >Yellow</button>

       </div>
      </div>
     </div>
    
  )
}

export default App
