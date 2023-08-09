// đây là App.js

import Content from './hook/useEffect12'
import {useEffect, useState} from 'react'
function App() {
  const [show,setShow]= useState(false)
  
  return (
    <div className="App" style={{padding:20}}>
      {/* khi ta cick sẽ gọi hàm , gọi tới setshow , xét giá trị là phủ định show, mỗi lần bấm sẽ đổi true flase */}
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {/* nếu mà Toggle đúng thì hiện navbar , đó là gắn vào, còn khi là false thì navbar bị gỡ ra là unmounted */}
      {show &&   <Content/>} 
    </div>
  
  );
}
export default App;
