// App.js

import Content from './RJ01/RJ01-4-2/Content.js'
import { useState} from 'react'
function App() {
  const [show,setShow]= useState(false)
  
  return (
    <div className="App" style={{padding:20}}>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show &&   <Content/>} 
    </div>
  
  );
}
export default App;
