

//Hook useState : trạng thái dữ liệu , khi dữ liệu thay đổi thì giao diện thay đổi trạng thái theo
// chú ý đổi tên useState.js ở file để về App.js 
import "./App.js"
import {useState} from "react"

function App() {
  const [state,setState] = useState(0);
  // nếu chỉ khai báo dòng 9,11,12,28 thì khi ấn vào chỉ +1 trong console chứ giao diện ko tăng thêm 1 mỗi lần click
  // let numberClick = 0;
  const handleClick =()=>{
    // numberClick++;
    // console.log(numberClick);
    // setState(state+1);
    //hoặc truyền vào 1 callback 
    // ta có thể truyền nhiều setState nhưng mỗi lần cick sẽ tổng hợp tất cả setState và chỉ render 1 lần
    setState((preState)=>{
     return preState+1;
    });
    setState((preState)=>{
      return preState+1;
     });
     setState((preState)=>{
      return preState+1;
     });

  }
  return (
    <div>
      {/* <h1>{numberClick}</h1> */}
      <h1>{state}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
