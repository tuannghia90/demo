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
// làm ứng dụng chọn ảnh , hiện thị ảnh luôn lên để xem trước

import { useState, useEffect } from 'react'


function Content() {
// b3: ảnh đang k có , sau này sẽ hiện ảnh => thay đổi , render => tạo state
const [avatar, setAvatar] = useState()
// b7 : khi thay ảnh thì ảnh cũ vẫn còn lưu gây rò rỉ bộ nhớ, ta cần cleapup khi thay ảnh mới
//TH 3.cleaup function được gọi trước khi call back được gọi ( trừ lần mounted)
useEffect(()=>{
// clear up
return () => {
    // kiểm tra có avatar mới xóa url , tránh trường hợp lúc đầu chưa có avata (underfile) vì useState chưa có gì
   // nó đưa làm deps ở [avatar], khi chọn 1 ảnh thì [avatar] thay đổi, gọi clean up trước , mà avatar đang underfile
   // underfile.privew sẽ lỗi nên ta cần kiểm tra
    avatar && URL.revokeObjectURL(avatar.preview)
}
},[avatar])
// b2 : tạo hàm handlePreviewAvarar , trả lại 1 even , ta lấy được file từ even , ta lấy ảnh đầu tiên [0]
const handlePreviewAvarar = (e) =>{
const file = e.target.files[0]
//file là 1 object , ta dùng object này tạo ra 1 url tạm để bật ảnh URL.createObjectURL() và truyền file vào trong
// nó sinh ra 1 blog url ở console , ta coppy rồi paste vào web là xem được ảnh
// chú ý chọn ảnh khác ảnh cũ , chọn 2 lần 1 ảnh sẽ k lọt vào, vì onchange là sự thay đổi
console.log(URL.createObjectURL(file))
// bước 4: file là 1 object , ta có thể thêm 1 proverty bất kỳ cho nó, ta đặt là preview
file.preview = URL.createObjectURL(file)
// bước 5: lấy object file xét vào avata
// => sau khi setState thì companent render lại , avata trong cost[avatar,setavatar] sẽ là setAvatar(file) , sẽ có proverty là preview 
// khi render lại avatar có , nhận được avatar.preview gắn vào thẻ  img
setAvatar(file)
// đặt value = null để dọn sạch, ta có thể gửi lại ảnh giống ảnh vừa chọn vì để onchange có sự thay đổi
e.target.value = null;
console.log('test')
}
  
  return (
    <div  style={{padding:20}}>
        {/* b1: tạo 1 input có type là file , onchange khi thay đổi sẽ gọi hàm handlePreviewAvarar , file có thể chọn nhiều ảnh nếu ta thêm multiple*/}
        <input type='file'
        onChange={handlePreviewAvarar} />
        
        {/* bước 6: có avatar và hiện thị ảnh  */}
        {avatar && (<img scr={avatar.preview} alt="" width="50%"/>)}
    </div>
  )
}
export default Content;
