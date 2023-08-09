// Mounted : thời điểm gắn 1 Comment  vào
// Unmounted : thời điểm gỡ 1 Comment ra
// khi ấn Toggle thì bật tắt chọn true false ( như công tắc ) 1 thẻ 

import {useState} from 'react'
import Navbar from './hook/Mounted1.2.js'
function App() {
  // ban đầu là ẩn nên ta đặt useState là false
  const [show,setShow]= useState(false)
    
  
  return (
    <div className="App" style={{padding:20}}>
      {/* khi ta cick sẽ gọi hàm , gọi tới setshow , xét giá trị là phủ định show, mỗi lần bấm sẽ đổi true flase */}
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {/* nếu mà Toggle đúng thì hiện navbar , đó là gắn vào, còn khi là false thì navbar bị gỡ ra là unmounted */}
      {show && <Navbar />} 
    </div>
  
  );
}
export default App;
