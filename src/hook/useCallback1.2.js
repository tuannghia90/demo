// ở đây hàm handleIncrease không còn nữa vì ta khai báo ở bên App.js , giờ ta sẽ truyền hàm handleIncrease
// qua prop của <Content></Content> bên App.js , từ đó nhận được prop ở function Content() và truyền cho onclick trong button
// prop giúp truyền dữ liệu từ component cha => con
import { memo } from "react";
//b2 truyền vào tham số của function Content  và onclick, nếu k dùng callback thì nó re-render lại cả Conten vì lần đầu chay , nó chạy hàm handleIncrease
// bên app.js và trả ra tham chiếu cho handleIncrease , truyền tham chiếu đó vào prop thẻ Conten bên app.js. Khi ấn cick tăng lên 1 thì
//sẽ set lại count => render lại App => tạo 1 phạm vi mới độc lập k liên quan phạm  vi trước đó, nó chạy code tạo lại 1 arrow funsion mới
// trả 1 tham chiếu mới về cho handleIncrease, truyền tham chiếu mới vào Content. Sang function Content , memo so sánh tham chiếu cũ và tham chiếu
// mới bằng toán tử === thấy khác nhau, trả về flase => prop thay đổi nên re-render lại function Content. nên ta sẽ dùng use callback bên app.js
// nếu dùng useCallback thì lần đầu chạy , App đc mouted , nó chạy qua const handleIncrease= useCallback, useCallback nhận được callback của nó
// nó tạo ra hàm trong callback , nhận được tham chiếu và lưu ra ngoài phạm vi hàm app => return lại tham chiếu đó cho biến const handleIncrease
// rồi nó lưu vào onIncrease={handleIncrease} trong thẻ Content bên App.js. Khi ấn click render thì deps này trống [] thì trả lại tham chiếu trước đó
// thay vì tạo ra hàm mới , vì vậy tham chiếu lưu lần 2 vào onIncrease={handleIncrease} vẫn là tham chiếu cũ , ta cick vẫn ko hiện  thêm log(re-render)

// với trường hợp callback dùng nhiều biến có khả năng thay đổi mỗi khi bị re-render, có thể đưa vào [deps], [deps ] bị thay đổi mỗi lần render 
// thì tạo ra callback mới. return về tham chiếu mới , còn deps k thay đổi thì trả về tham chiếu trước đó
//một cái component có thể nhận nhiều prop , có thể là số , hàm , mảng , object, nếu xác định sử dụng react memo tránh component con bị render
// không cần thiết thì function phải dùng use callback hết tránh bị render k cần thiết . Còn nếu k sử dụng ract memo cho component con thfi
// không cần dùng use callback
function Content({onIncrease}){
    console.log('re-render');
    return(
       <>
            <h2>Hello 300 anh em </h2>
        <button onClick={onIncrease}>Click me</button>
       </>
    
    )
}

export default memo(Content)
