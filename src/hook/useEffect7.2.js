 //1.update Dom (f8 blog title)
 //2. Call API
 //3.Listen Dom events : scroll/resize
 //4.CleanUp 
  //-remove listerner / unsubcribe
  //-clear timers
  //5 : Time : set Interval , setTimeOut, clearInterval, clearTimeout
  //6.use state

//useEffect  dùng khi thực hiện các side effect , khi có tác động xảy ra thì có thay đổi dữ liệu
// ví dụ như update DOM, call API nhận lại dữ liệu rồi sử dụng dữ liệu đó, listen Dom event,removeEventListener,unsubscribe
//useEffect chứa 2 đối số , 1 là callback bắt buộc , ta tự viết code để thực hiện thay đổi,
// thứ 2 là mảng phụ thuộc dữ liệu gọi là dependency viết tắt là deps không bắt buộc
// nên ta có chia ra ít nhất 3 trường hợp 
//1.useEffect(callback) 
  //gọi call back mỗi khi component re-render (ở đây là onchange ở input)
  //gọi call back mỗi khi component thêm element vào DOM ( nó tạo xong thẻ div ở retun mới chạy useEffect)
//2.useEffect(callback,[]) 
 // chỉ gọi callback 1 lần khi component mounted (thời điểm gắn 1 Comment vào)
//3.useEffect(callback,[deps])
// deps là biến truyền từ ngoài vào, có thể là useState nằm trong component
// callback được gọi lại mỗi khi deps thay đổi
//------------------------------------
// Chung: cả 3 TH thì callback luôn được gọi sau khi được mounted (thời điểm gắn 1 Comment vào)
// 2.cleaup function được gọi trước khi companent unmounted
//3.cleaup function được gọi trước khi call back được gọi ( trừ lần mounted)

// //3.cleaup function được gọi trước khi call back được gọi ( trừ lần mounted)


import { useEffect, useState } from 'react'


function Content() {
// b1  cần render lại  màn hình thì phải update lại con số , ta dùng use state
  const[count,setCount]=useState(1)
  useEffect(()=>{
      console.log(`Mounted or re-render lần ${count}`)
      //cleanup func
      return () =>{
        console.log(`Cleanup lần ${count}`)
      }
  },[count])

 
  
  return (
    <div  style={{padding:20}}>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>
          Click me!
        </button>
    </div>
  )
}
export default Content;
