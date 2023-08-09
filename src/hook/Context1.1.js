// đây là App.js
import {useState} from 'react'
import Content from "./hook/Context1.2.js";
import './App.css'
// context : đơn giản hóa truyền dữ liệu từ component cha xuống component con mà k cần dùng prop, ví dụ có cha là CompA => có con là comB 
// =>B lại là cha của compC , giờ ta muốn truyền dữ liệu từ A=>C , bt thì dùng prop trung gian qua B nhưng ùng context thì k cần
//yêu cầu : ấn button ở thẻ con đổi mầu văn bản tối - sáng từ thẻ cha
// đây là cách 1, truyền qua prop (cần 4 file App.jss ,context1.2 context1.3 và App.css) nhược điểm  là Comp B trung gian ở giữa nếu bị 
// xóa thì phải mất công khắc phục
function App () {
  //b1 : để đổi giao diện ta cần dùng useState
   const[theme,setTheme] = useState('dark')
   // b2 : tạo hàm toggleTheme , so sánh theme với mầu dark , sai trả light , đúng trả dark
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
    return(
    <div style ={{padding:'0 20px'}}>
        {/* b3: gắn onclick = hàm */}
        <button onClick={toggleTheme}>
            Toggle theme
        </button>
        {/* b4: gắn proverty vào thẻ , sau đó cho vào prop thẻ trung gian  */}
        {/* b5: gắn className trong thẻ p ={theme} , sau đó thêm nội dung vào App.css và import từ css; */}
        <Content theme={theme} />
    </div>
    )
}
export default App;