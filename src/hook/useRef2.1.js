//UseRef : lưu các giá trị qua 1 tham chiếu
// function component

// yêu cầu làm 1 đồng hồ đếm ngược từ 60 , ấn star bắt đầu đếm ngược , ấn stop thì dừng
// yêu cầu 2: ta cần biết giá trị hiện tại và giá trị trước đó của state trước một lần render
//b4 (sai) : để lấy được id của handleStar để dừng , ta có thể khai báo biến ở ngoài app nhưng cách này k nên dùng
  // ta dùng let vì ta cần gán lại biến , ta viết ở ngoài để cả 2 hàm có thể truy cập và sử dụng
  // nhưng nếu khai báo thế này thì sẽ stop được vì nếu  star > 1s mà k ấn stop thì sẽ gọi tới
  // let timerId
  import { useState,useRef,useEffect} from 'react'
  function App() {
    //b1 : tạo count, usestate là 60 , làm sẵn khung 2 hàm star và stop
    const [count,setCount]= useState(60)
    // b4 ( đúng ) useRef là 1 hàm nhận đối số là initiaValue ( giá trị khởi tạo), chỉ SD lần đầu khi component đc mounted
    // khi component re-render sẽ k dùng lại giá trị khởi tạo và useRef luôn trả về 1 object có proverty là current , value là số truyền vào
    // ta khai báo biến timerId = useRef() , để lấy đc value thì ta thêm .current vào sau timerId toàn bộ hàm
    // ta dùng const gắn cho timerId mà k dùng let vì ta k gắn lại timerId mà chỉ gán proverty của nó là current
    const timerId = useRef()
    const prevCount = useRef()
   
    //b5 (yc2) ở đây ta có  count là State, ta cần log ra count và giá trị trước đó của count , import thêm useEffect
    // truyền deps là count vì mỗi khi count thay đổi sẽ gọi lại callback useEffect 
    useEffect(()=>{
      prevCount.current = count
    },[count])
    //b3 : viết logic handleStar
    const handleStar=()=>{
      timerId.current= setInterval(()=>{
        setCount(prevCount => prevCount -1)
      },1000)
      console.log('star ->',timerId.current)
    }
    const handleStop=()=>{
      clearInterval(timerId.current)
      console.log('stop ->',timerId.current)
    }
    //B6 : Ta có thể log ra xem 
    // tại thời điểm ban đầu prevCount.current = 60 vì theo tính chất useEffect thì callback được gọi 1 lần sau khi
    //component được mounted, khi chạy trương trình thì return dc đưa vào DOM thật =>  gọi callback useEffect 1 cái
    // và lúc đó [count] là 60 nên gán prevCount.current=count=60. 
    // khi Star , chạy vào handleStar sau 1 s nó xét setCount(prevCount => prevCount -1) vậy là Count = 59 , gọi lại
    // component app ,  count trong const [count,setCount] là 59 => xuống return , hiện ở h1 count là 59 , sau đó lên 
    // gọi callback của useEffect , [count] sẽ là 59, lại  gán prevCount.current=count=59
    console.log(count,prevCount.current);
  
    return (
      //b2 : retur thẻ h1 có chứa nội dung count , tạo 2 button, gắn onclick bằng 2 hàm handleStar và handleStop
      <div className="App" style={{padding:20}}>
       <h1>{count}</h1>
        <button onClick={handleStar}>Star</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    
    );
  }
  export default App;
  