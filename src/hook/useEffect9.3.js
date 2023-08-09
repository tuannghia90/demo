import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// đây là index.js
//b3: làm chức năng comment ( fake comment) : tạo hàm emit ( phát đi ) nhận tham số là id của lessons
function emitComment(id){
    // b4: đây là cách customEven tự phát đi 1 even tùy ý , giả sử có người 2s cmt 1 lần , ta dùng setInterval để tự động 2s phát ra even tương tự
    // người ta comment , bên trong dùng phạm vi window nên ta dispatEven thì bất cứ file nào trong ứng dụng đều lắng nghe được đối tượng even

    setInterval(()=>{
        window.dispatchEvent(
            //b5: truyền vào 1 new CustomEvent, đối số 1 là even name ta đặt theo lesson - id
            // đối số 2 là 1 object even , ta dùng proverty là detail , ta truyền value là nội dung theo id . B6 sang useEffect9.2.js
            new CustomEvent(`lesson-${id}`,{
                detail: `Nội dung commet của lesson ${id} `
            })
        )
        // 2s sẽ phát 1 sự kiện đi
    },2000)
}
// phát ngẫu nhiên 1 trong 3 id
emitComment(1)
emitComment(2)
emitComment(3)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
