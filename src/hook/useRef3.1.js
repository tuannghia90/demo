//UseRef : lưu các giá trị qua 1 tham chiếu , cũng có thể lưu 1 dom element ( các thẻ)
// ví dụ mình muốn lấy h1 element ở return


import { useState,useRef,useEffect} from 'react'
function App() {
  const [count,setCount]= useState(60)
  const timerId = useRef()
  const prevCount = useRef()
  //b1 : tạo h1 ref
  const h1Ref = useRef()
  useEffect(()=>{
    prevCount.current = count
  },[count])
  //b3 dùng useEffect để xem
  useEffect(()=>{
    // xem thẻ h1 được lấy ra
    console.log(h1Ref.current);
    // xem tọa độ
    const rect = h1Ref.current.getBoundingClientRect()
    console.log(rect)
  })
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
  console.log(count,prevCount.current);

  return (
    <div className="App" style={{padding:20}}>
      {/* b2 , h1 hỗ trợ ref */}
     <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStar}>Star</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  
  );
}
export default App;
