import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if(color<2){setColor(color+1)}else{setColor(0)}
    },2000)
  },[color])

  return (
    <div style={{width: "100%", height:"100vh", background: "linear-gradient(#DD3399, #33DD99)"}} className='flex'>
      <div style={{width: "50%", height: "150px", borderRadius: "50px", background: "#DDDDDD"}} className='flex-a'>
        <div className='foquito' style={color === 0 ? {background: 'red'}:{background:'gray'}}></div>
        <div className='foquito' style={color === 1 ? {background: 'yellow'}:{background:'gray'}}></div>
        <div className='foquito' style={color === 2 ? {background: 'green'}:{background:'gray'}}></div>
      </div>
    </div>
  );
}

export default App;
