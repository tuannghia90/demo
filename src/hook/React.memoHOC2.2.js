//c2 ta có import React để sử dụng toàn bộ
// import React from "react";
// nguyên tắc sử dụng : memo nhận 1 component và sau đó check các prop của component đó  sau mỗi lần render bị thay đổi k
// 1 component có thể nhận vô số prop , nếu có 1 prop bị thay đổi sẽ re-render , còn ko có thay đổi sẽ giữ nguyên
// memo sử dụng toán tử === để so sánh
// TH 2 : đưa Content vào sử dụng
//mỗi lần count trong const [count,setCount] App tăng 1 đơn vị, được truyền vào thẻ Conten qua prop ở return App nên mỗi lần re-render prop
// ở function Content({count}) thay đổi nên re-render lại function Content , update lại giá trị {count} ở thẻ  <h2>Hello 300 anh em {count} </h2>
import { memo } from "react";
function Content({count}){
    console.log('re-render');
    return(
        <h2>Hello 300 anh em {count}  </h2>
    )
}

export default memo(Content)
//nếu dùng import react thì ta export như này
// export default React.memo(Content)