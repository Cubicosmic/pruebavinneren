import { useState } from 'react';
import './App.css';
import Foquito from './Foquito';

function App() {
  return (
    <div style={{width: "100%", height:"100vh", background: "linear-gradient(#DD3399, #33DD99)"}} className='flex'>
      <div style={{width: "50%", height: "150px", borderRadius: "50px", background: "#DDDDDD"}} className='flex-a'>
        <Foquito bg={'#FF0000'} dy={2} />
        <Foquito bg={'#FFFF00'} dy={4} />
        <Foquito bg={'#00FF00'} dy={6} />
      </div>
    </div>
  );
}

export default App;
