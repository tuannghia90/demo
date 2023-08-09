import {useState} from 'react'

function App() {
  const [show,setShow]= useState(false)
  return (
    <div className="App" style={{padding:20}}>
      <button onClick={()=>setShow(!show)}>{show ? 'Đóng ' : 'Mở'}</button>
      {show && <header>Chữ đã được hiện ra rồi </header>} 
    </div>
  
  );
}
export default App;
