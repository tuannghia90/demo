 // useEffect : thứ tự hoạt động
 //1.update State (mutated) ( VD có 1 objiec ,sửa 1 cái proverty trong 1 object nhưng bên ngoài trông vẫn vậy)
 //2 .update Dom 
 //3. render UI
 //4.CleanUp  nếu deps thay đổi
 //5 :gọi useEffect callback
 
  // useLayoutEffect: thứ tự hoạt động
 //1.update State
 //2 .update Dom (mutated)
 //3. Gọi CleanUp  nếu deps thay đổi (sync ) sync có nghĩa là đồng bộ
 //4. useLayoutEffect  callback thay đổi (sync)
 //5 :render lại ui

 // bài toán có 1 ứng dụng đếm số nhưng yêu cầu đếm đến >3 thì quay lại 0

 import { useState, useEffect,useLayoutEffect } from 'react'
function Content() {
const [count, setCount] = useState(0)
// // nếu ta code như này thì khi kết thúc số 3 , ấn nó xuất hiện số 4 rất nhanh rồi quay về 0 , lý do là ở số 3 , nếu ta cick run thì 
// // setCount ( count +1) sẽ là 4 => render lại Content =>  count trong const [count, setCount] là 4 , nó chạy đến useEffect nó thấy [count]
// // thay đổi, nhưng call back chưa được gọi=> đi xuống return , thực hiện render <h1> ra số 4 , sau đó mới quay lên callback check thấy
// // 4 > 3 nên nó xét về 0 nên ta cần dùng useLayoutEffect để xử lý
// useEffect(()=>{
//     if(count>3)
//     setCount(0)
// },[count])

// // nếu dùng layoutEffect nếu ta cick run thì setCount ( count +1) sẽ là 4 => render lại Content =>  count trong const [count, setCount] là 4 
// nó chạy đến đi xuống return để miu tết ? lại DOM chứ chưa kịp render UI => quay lại layoutEffect , chạy callback , thấy 4>3 sẽ setCount =0 
// quay về bước 1 update State => 2 .update Dom => 0<3 , không làm gì => render lại UI
useLayoutEffect(()=>{
    if(count>3)
    setCount(0)
},[count])

const handleRun = () =>{
setCount ( count +1)
}    
  return (
    <div >
       <h1>{count}</h1>
       <button onClick={handleRun}>Run</button>
    </div>
  )
}
export default Content;
