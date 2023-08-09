//useEffect  dùng khi thực hiện các side effect , khi có tác động xảy ra thì có thay đổi dữ liệu
// ví dụ như update DOM, call API nhận lại dữ liệu rồi sử dụng dữ liệu đó, listen Dom event,removeEventListener,unsubscribe
//useEffect chứa 2 đối số , 1 là callback bắt buộc , ta tự viết code để thực hiện thay đổi,
// thứ 2 là mảng phụ thuộc dữ liệu gọi là dependency viết tắt là deps không bắt buộc
// nên ta có chia ra ít nhất 3 trường hợp 
//1.useEffect(callback) 
  //gọi call back mỗi khi component re-render (ở đây là onchange ở input)
  //gọi call back mỗi khi component thêm element vào DOM ( nó tạo xong thẻ div ở retun mới chạy useEffect)
//2.useEffect(callback,[]) 
//3.useEffect(callback,[deps])
// bài này ta học về call API ( xét TH 1)
//------------------------------------
// Chung: cả 3 TH thì callback luôn được gọi sau khi được mounted (thời điểm gắn 1 Comment vào)


// ở đây ta khi ta gõ văn bản input để thay đổi title trang web theo 

import Content from './hook/useEffect8.2.js'
import { useState} from 'react'
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
