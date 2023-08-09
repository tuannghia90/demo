 //1.update Dom (f8 blog title)
 //2. Call API
 //3.Listen Dom events : scroll/resize
 //4.CleanUp 
  //-remove listerner / unsubcribe
  //-clear timers
 
 
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
 import {useEffect, useState} from 'react'
 function Content(){
  const [title,setTitle]=useState('')
  // ban đầu là ẩn nên ta đặt useState là false
  
    useEffect(()=>{
      //mỗi lần gõ ký tự ở input thì đều chạy vào useEffect và truy cập được title với giá trị mới, 
      console.log('Mounted',title)
      // ta có thể lấy được dữ liệu ở bên trong , gắn vào title để update DOM hoàn thành yêu cầu đầu bài
      //document.title = title cần ghi bên trong useEffect cho đúng logic , với cả để return chạy trước rồi mới chạy title, ưu tiên luồng chính có UI cho người dùng
      // còn để ngoài thì title chạy trước rồi mới đến return, gây trễ giao diện người dùng
      document.title = title
    })
  return(
    <input value={title} onChange={e=>setTitle(e.target.value)}></input>
  )
}
export default Content