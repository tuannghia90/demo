// đây là App.js
import { useContext} from 'react'
import { ThemeContext } from './hook/Context2.4.js';

import Content from "./hook/Context2.2.js";
import './App.css'

// context : đơn giản hóa truyền dữ liệu từ component cha xuống component con mà k cần dùng prop, ví dụ có cha là CompA => có con là comB 
// =>B lại là cha của compC , giờ ta muốn truyền dữ liệu từ A=>C , bt thì dùng prop trung gian qua B nhưng ùng context thì k cần
//yêu cầu : ấn button ở thẻ con đổi mầu văn bản tối - sáng từ thẻ cha
// đây là cách 2:
//b1 :create context : tạo ra context, tạo pham vi từ comp cha có thể truyền đi đến tất cả comp con
//b2 : provider ( nhà cung cấp) để chuyển dữ liệu
//b3 : consumer ( người sử dụng ) để nhận dữ liệu 

function App () {
  //b7 : import useContext rồi nhận lại context , import lấy ra ThemeContext rồi truyền vào useContext
  const context = useContext (ThemeContext)
  
    return(
     
      
    <div style ={{padding:'0 20px'}}>
        {/* b8 tạo onClick =ontext.toggleTheme        */}
        <button onClick={context.toggleTheme}>
            Toggle theme
        </button>
        <Content />
    </div>
    
    )
}
export default App;