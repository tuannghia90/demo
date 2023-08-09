// đây là App.js
// 1. memo() -> higher order component (HOC) component bậc cao
// 2. useCallback

// trong react có 3 cái : đều giúp kế thừa logic , có những tính năng cụ thể , có ưu nhược điểm khác nhau
// hook : gắn vào , móc vào , dùng bên trong function
// HOC : k dùng bên trong mà warp lại , ví dụ dùng memo cho app sẽ gọi memo rồi truyền app vào : export default memo(App)
// Render props

// memo tức là ghi nhớ lại 1 prop của 1 component để quyết định render lại component đó hay k , tránh render component không cần thiết
import Content from './hook/React.memoHOC2.2'
import { useState}from 'react'
// gọi component App là component cha , <Content> là component con vì sử lại content bên trong
// ở đây khi ta cick ở app render kéo theo Content render , mà Content k sử dụng state Count , đáng nhẽ Content k cần phải bị render lại
//b1: bên Content
// nguyên tắc sử dụng : memo nhận 1 component và sau đó check các prop của component đó  sau mỗi lần render bị thay đổi k
// 1 component có thể nhận vô số prop , nếu có 1 prop bị thay đổi sẽ re-render , còn ko có thay đổi sẽ giữ nguyên

function App() {
  const [count,setCount]= useState(0)
  
  const increase=()=>{
      setCount(count+1)
    }
    
  return (
    <div className="App" style={{padding:20}}>
      {/* TH2 : ta đưa Content vào sử dụng */}
      <Content count={count} />
     <h1 >{count}</h1>
      <button onClick={increase}>Click me</button>
    </div>
  
  );
}
export default App;
