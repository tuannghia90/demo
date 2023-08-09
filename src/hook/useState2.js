
// // lấy useState từ thư viện react
// import {useState} from 'react'
// // ở lần đầu giá trị khởi tạo useState là 0 nên counter là 0
// function App() {
//  const [counter,setCounter] = useState(0)
//  // tạo ra hàm chứ chưa gọi
//   const handleIncrease = () =>{
//     setCounter(prevState => prevState +1)
//     setCounter(prevState => prevState +1)
//     setCounter(prevState => prevState +1)
//   }
//   return (
//     <div className="App" style={{padding:20}}>
//       {/* truyền counter đã khai báo ở trên vào h1 nên hiện ra số 0  */}
//       <h1>{counter}</h1>
//       {/* khi bấm vào button , sẽ gọi ra hàm handleIncrease nên đoạn code trong hàm đó ở dòng 9 được thực thi, sẽ lấy giá trị là 0 + 1 = 1,
//       khi đó counter sẽ thành 1 ,react sẽ gọi lại hàm App sau đó render lại giao diện thành 1, từ lần thứ 2 khi app chạy lại sẽ lấy
//       giá trị lần trước đó */}
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

// export default App;


// // tính tổng rồi cho làm số ban đầu
// import {useState} from 'react'
// const orders = [100,200,300]
// function App() {
//  const [counter,setCounter] = useState(()=> {
//   const total = orders.reduce((total,cur)=> total + cur);
//   console.log(total);
//   return total;
// });
//   const handleIncrease = () =>{
//     setCounter(prevState => prevState +1)
//   }
//   return (
//     <div className="App" style={{padding:20}}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }
// export default App;

// thay đổi thông tin
import {useState} from 'react'

function App() {
 const [info,setInfo] = useState({
  name : 'Nguyễn Văn A',
  age : '18',
  address : 'Hà Nội'
 })
 const handleUpdate = () =>{
  setInfo({
    ...info,
    bio: 'yêu mầu hồng'
  })
 }

// viết như cách trên cho đơn giản hoặc khi cần 1 logic
// const handleUpdate = () =>{
//   setInfo(prev => ({
//     ...prev,
//     bio: 'yêu mầu hồng'
// }))
// }

  return (
    <div className="App" style={{padding:20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
export default App;
