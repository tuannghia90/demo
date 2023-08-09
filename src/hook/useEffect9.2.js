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
// làm 1 kênh có nhiều bài,ở mỗi bài ta nhận được comment ở bài đó ,  khi ta thay đổi bài thì sẽ bỏ theo dõi
// các comment bài cũ mà chuyển sang theo dõi các comment bài mới

import { useState, useEffect } from 'react'
// b1: khai báo ra 3 bài học, có id và name
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì'
    },
    {
        id: 3,
        name: 'Arrow function'
    },
]

function Content() {
const [lessonId, setLessonId] = useState(1)
// b6 : lắng nghe DOM even trong useEffect
    useEffect(()=>{
        const handleComment = (detail) => {
            console.log(detail);
            // e chính là object detail bên index.js , ta có thể thay detail vào thay e
        }
        // b7 : ta thay lessonsId vào [deps] và lesson-1 ở dưới, theo tính chất useEffect thì 
        // khi mounted component vào thì chạy callback 1 lần , sau đó sẽ lấy [lessonsId] = 1
        // khi ta cick lesson khác thì lessonsId đc xét lại, component đc re-render lại 
        // kiểm tra [lessonId] bị thay đổi sẽ gọi lại callback của useEffect, lister id mới
        window.addEventListener(`lesson-${lessonId}`,handleComment)
        // b8: khi ta đổi bài mới thì nó hiện cả detail bài cũ , ta cần cleaup function gọi trước khi call back đc gọi
        return()=>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }

    },[lessonId])
  return (
    <div >
       <ul>
        {/* b2: render ra giao diện người dùng , xử lý việc active bằng style, khi onclick có lessonId ở const [lessonId, setLessonId]
        dựa vào lessonId so sánh với lesson.id để biết đang ở lesson nào, active thì chữ đỏ , không thì chữ đen , b3 sang index.js (useEffect9.3.js)*/}
        {lessons.map(lesson=>(
            <li
                key={lesson.id}
                style={{
                    color:lessonId===lesson.id ? 'red' : '#333'
                }}
                onClick={()=>setLessonId(lesson.id)}
            >
                {lesson.name}
            </li>
        ))}
       </ul>
    </div>
  )
}
export default Content;
