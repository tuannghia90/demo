//c2 ta có import React để sử dụng toàn bộ
// import React from "react";
// nguyên tắc sử dụng : memo nhận 1 component và sau đó check các prop của component đó  sau mỗi lần render bị thay đổi k
// 1 component có thể nhận vô số prop , nếu có 1 prop bị thay đổi sẽ re-render , còn ko có thay đổi sẽ giữ nguyên
// memo sử dụng toán tử === để so sánh
import { memo } from "react";
function Content(){
    console.log('re-render');
    return(
        <h2>Hello 300 anh em</h2>
    )
}

export default memo(Content)
//nếu dùng import react thì ta export như này
// export default React.memo(Content)