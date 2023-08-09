import { ThemeContext } from "./Context2.4.js"
import { useContext } from "react"

//b3 : import ThemeContext  và useContext từ Context2.4.js ( ở b1 ) để nhận dữ liệu, sau đó dùng useContext nhận về ThemeContetx
function Paragraph(){
    //b6 : Paragraph sẽ nhận lại 1 object 
   const context = useContext(ThemeContext)
    return(
        //b6 đổi className context.theme lấy value của theme
        <p className={context.theme}>
            React Context sẽ cho phép chúng ta có thể tạo data và truyền nó với một provider đến tất cả component trong ứng dụng React mà không cần dùng “prop drilling” .
        </p>
    )
}
export default Paragraph