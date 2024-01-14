import { useState } from "react";
import './App.css';

function App() {
const [Color, setColor] = useState("white")

  return (
    <>
  <div className="w-full h-screen " style={{backgroundColor : Color}}>
<div className="flex item-center justify-between bg-zinc-900">
  <button className="w-12 h-8 bg-red-600"  onClick={()=>setColor("red")}> red</button>
  <button className="w-12 h-8 bg-sky-600"  onClick={()=>setColor("blue")}> blue</button>
  <button className="w-12 h-8 bg-green-600"  onClick={()=>setColor("green")}> green</button>
  <button className="w-12 h-8 bg-yellow-600"  onClick={()=>setColor("yellow")}> yellow</button>
  <button className="w-12 h-8 bg-pink-600"  onClick={()=>setColor("pink")}> pink</button>
</div>
  </div>
    </>
  );
}

export default App;
