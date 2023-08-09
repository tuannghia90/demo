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

//   //5 : Time : set Interval , setTimeOut, clearInterval, clearTimeout
// cách làm, vấn đề xảy ra và cách khắc phục
// xây dựng 1 ứng dụng đếm theo giây , đếm ngược từ 180s về
//// 2.cleaup function được gọi trước khi companent unmounted

import { useEffect, useState } from 'react'


function Content() {
// b1 đồng hồ đếm ngược , nó cần render lại  màn hình thì phải update lại con số , ta dùng use state
  const[countdown,setCountdown]=useState(180)
//   b2 : chọn cách 2 truyền mảng rỗng , ta xài 1 lần
//   c1 ta dùng setInterval (một hàm đánh giá một biểu thức sau một khoảng thời gian xác định (tính bằng mili giây))

  useEffect(()=>{
    // b3: ta khai báo timerid để dùng cho bước 4 , tránh gây rò rỉ bộ nhớ
    const timerId = setInterval(()=>{
    //nếu ta dùng setCountdown(Countdown-1) thì sẽ là hàm đóng , tức là callback của useEffect chạy duy nhất 1 lần, thời điểm đó countdown là 180
    // lúc đó biến countdown tham chiếu tới giá trị ban đầu là 180, setInterval mặc dù chạy nhiều lần nhưng chạy trong phạm vi chạy 1 lần
    // nên countdown luôn là 180 -1 là 179 , vì vậy ta nên dùng callback , lấu ra prevState = prevState-1 , trong hàm đó k có tham chiếu tới
    //biến nào ngoài phạm vi , k dùng countdownt nữa nên k gặp tình huống như vậy
        setCountdown(prevState => prevState-1)
        console.log('CountDownt')
    },1000)
    // b4: khi unmount nhưng cowndown vẫn chạy , ta cần gỡ ra như bài trước
    return ()=>{clearInterval(timerId)
    }
  },[])

    // //c2 : dùng set timeout
    // useEffect(()=>{
    //     // nếu dùng settimeout thì chỉ chạy 1 lần còn 179 rồi dừng vì callback chỉ chạy 1 lần vì mảng truyền vào rỗng[]
    //     // ta  truyền setCountdown(countdown -1) , mỗi lần setCountdown được xét , sẽ re-render lại component, coundown bị trừ đi 1
    //     // lại lấy coundown đưa vào [deps], deps thay đổi lại gọi lại callback  của useEffect , gọi lại setTimeout
    //     setTimeout(()=>{
    //         setCountdown(countdown -1)
    //         console.log('Count downt')
    //     },1000)
    // },[countdown])
 
  
  return (
    <div  style={{padding:20}}>
      {/* gắn countdow cho thẻ h1 */}
        <h1>{countdown}</h1>
    </div>
  )
}
export default Content;
