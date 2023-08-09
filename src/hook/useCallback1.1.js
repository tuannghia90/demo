// đây là App.js
// 1. memo() -> higher order component (HOC) component bậc cao
// 2. useCallback
  // - Reference types : kiểu dữ liệu tham chiếu
  // - React memo()

// useCallback : giúp tránh tạo ra các hàm mới không cần thiết trong function component
// nhiều trường hợp sơ ý tạo ra các function mới không cần thiết , có thể dẫn tới component con bị re-render k cần thiết mặc dù áp dụng memo
// yêu cầu là đưa <buton> từ App return vào content mà vẫn hoạt động , khi ta cick 1 cái thì số +1

import Content from './hook/useCallback1.2.js'
import { useCallback, useState}from 'react'

function App() {
  const [count,setCount]= useState(0)
  // ta sử dụng use callback , nhận 2 đối số , 1 là hàm của bạn , 2 là 1 mảng , hoạt động như useEffect
  const handleIncrease= useCallback(()=>{
    setCount(prevCount=> prevCount+1)},[] )
    
    
  return (
    <div className="App" style={{padding:20}}>
      {/* b1: tự tạo prop rồi truyền handleIncrease vào , hành động trực tiếp xử lý đặt là handle còn chờ hành động đó đặt là on , b2 bên conten*/}
      <Content onIncrease={handleIncrease}/>
     <h1 >{count}</h1>
      {/* <button onClick={increase}>Click me</button> */}
    </div>
  
  );
}
export default App;
//b2 truyền vào tham số của function Content  và onclick, nếu k dùng callback thì nó re-render lại cả Conten vì lần đầu chay , nó chạy hàm handleIncrease
// bên app.js và trả ra tham chiếu cho handleIncrease , truyền tham chiếu đó vào prop thẻ Conten bên app.js. Khi ấn cick tăng lên 1 thì
//sẽ set lại count => render lại App => tạo 1 phạm vi mới độc lập k liên quan phạm  vi trước đó, nó chạy code tạo lại 1 arrow funsion mới
// trả 1 tham chiếu mới về cho handleIncrease, truyền tham chiếu mới vào Content. Sang function Content , memo so sánh tham chiếu cũ và tham chiếu
// mới bằng toán tử === thấy khác nhau, trả về flase => prop thay đổi nên re-render lại function Content. nên ta sẽ dùng use callback bên app.js
// nếu dùng useCallback thì lần đầu chạy , App đc mouted , nó chạy qua const handleIncrease= useCallback, useCallback nhận được callback của nó
// nó tạo ra hàm trong callback , nhận được tham chiếu và lưu ra ngoài phạm vi hàm app => return lại tham chiếu đó cho biến const handleIncrease
// rồi nó lưu vào onIncrease={handleIncrease} trong thẻ Content bên App.js. Khi ấn click render thì deps này trống [] thì trả lại tham chiếu trước đó
// thay vì tạo ra hàm mới , vì vậy tham chiếu lưu lần 2 vào onIncrease={handleIncrease} vẫn là tham chiếu cũ , ta cick vẫn ko hiện  thêm log(re-render)

// với trường hợp callback dùng nhiều biến có khả năng thay đổi mỗi khi bị re-render, có thể đưa vào [deps], [deps ] bị thay đổi mỗi lần render 
// thì tạo ra callback mới. return về tham chiếu mới , còn deps k thay đổi thì trả về tham chiếu trước đó
//một cái component có thể nhận nhiều prop , có thể là số , hàm , mảng , object, nếu xác định sử dụng react memo tránh component con bị render
// không cần thiết thì function phải dùng use callback hết tránh bị render k cần thiết . Còn nếu k sử dụng ract memo cho component con thfi
// không cần dùng use callback