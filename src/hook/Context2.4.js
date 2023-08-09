// đây là component trung gian truyền dữ liệu , tạo ra context và provieder

import {useState , createContext} from 'react'


//b1 : import createContext , tạo ThemeContext rồi export nó ra ngoài để consumer nhận được , trả về 1 objec có provider và consumer
const ThemeContext = createContext()
console.log(ThemeContext)
//b2 : tạo ra Provider , hàm toggleTheme
//b3 : thêm {children} vào tham số 
function ThemeProvider({children}){
   const[theme,setTheme] = useState('dark')
 
   const toggleTheme = () => {
     setTheme(theme === 'dark' ? 'light' : 'dark')
   }
   //b5 : để khi cick button nhận hàm từ đây, ta không truyền {value} là chuỗi mà truyền object , khai báo tạo const value
   const value = {
    theme,
    toggleTheme
   }
     return(
     //b5: truyền object  {value} vừa khai báo vào proverty value
    <ThemeContext.Provider value={value}>
      {/* b3 : thêm {children} để ôm được thẻ div bên app.js */}
        {children}
    </ThemeContext.Provider>
)
}
export {ThemeProvider, ThemeContext}