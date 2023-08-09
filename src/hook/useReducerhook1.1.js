// đây là App.js
import { useState,useReducer } from "react";
//useReducer : cung cấp thêm 1 sự lựa chọn khi sử dụng State cho function component , tức là với 1 bài toán dùng useState giải quyết được thì 
// dùng useReducer cũng giải quyết được và ngược lại , useState dùng cho component đơn giản , State dạng số chuỗi bool hoặc arr , obj nhưng 1 cấp
// hoặc số state trong component ít . UseReducer dùng khi kiểu dữ liệu ở useState(0) không còn là số mà là arr , obj nhiều tầng lớp, trong arr
// có nhiều arr con, trong obj có nhiều obj con, hoặc khi bạn  có rất nhiều state

// nếu làm bằng UseState
//1. giá trị khởi tạo initstate = 0
//2. Hành động Actions : up ( state +1 ) và down ( state -1 )


// nếu làm bằng UseRed
//1. giá trị khởi tạo initstate = 0
//2. Hành động Actions : up ( state +1 ) và down ( state -1 )
//3. reducer
//4. dispatch
function App () {
    const [count,setCount] = useState(0)

    return(
    <div style ={{padding:'0 20px'}}>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>
            Down
        </button>
        <button onClick={()=>setCount(count+1)}>
            Up
        </button>
    </div>
    )
}
export default App;