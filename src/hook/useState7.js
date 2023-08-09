
// lấy đc giá trị của ratio ( lựa chọn ) khi ấn đăng ký
// response từ api trả về
import {useState} from 'react'
const courses =[
  {
    id:1,
    name:'HTML'
  },
  {
    id:2,
    name:'Javascript'
  },
  {
    id:3,
    name:'ReactJS'
  }
]

function App() {
  // ta có thể chọn nhiều nên sẽ lưu lại không phải 1 số mà là 1 mảng ở useState
const[checked,setChecked]=useState([])
console.log(checked)
// mỗi lần check  thì ta lấy đc id rồi lưu vào mảng
const handleCheck = (id) => {
  // prev return ra mảng mới , truyền thêm id vào thì ra 1 mảng lưu nhiều lựa chọn, đây là one way binding khi cick bên trong console có dữ liệu
setChecked(prev=>{

  // dùng inculue để check dữ liệu trong mảng đó có cái id đó k
  const isChecked = checked.includes(id)
  // nếu đã check ( từ lượt chọn 1 phần tử lần thứ 2)
  if(isChecked)
  {
    // checked là mảng đã lựa chọn , ví dụ ta cick cả 3 thì mảng đã có [1,2,3], khi ta cick thêm 1 lần nữa thì id trong handcheck=(id) là 1
    //  filter nhận lại cái item, giúp lọc bỏ cái thằng đang chọn check,  lấy đứa còn lại, thằng khác id = 1 ( ví dụ ta cick lựa chọn đầu thêm lần nữa)
    return checked.filter(item => item !== id)
  }
  else
  {// nếu chưa check ( lượt đầu chọn )
    // dùng toán tử spread trong es 6 để nối mảng
    return  [...prev,id]
  }
 
})
}
const handleSubmit = () => {
  // trả ra mảng các id đc chọn
 console.log({ids:checked})
}
  return (
    <div className="App" style={{padding:20}}>
      {courses.map(course=>(
        <div key={course.id}>
          <input type="checkbox"
          // ngược lại , khi dữ liệu thay đổi thì bên ngoài được check
          // ta có cái mảng rùi , giờ include để check xem mảng đó có id k , nếu có trả về true
          checked = {checked.includes(course.id)}
          onChange={()=>handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
     

      <button onClick={handleSubmit}>Đăng ký</button>
    </div>
  );
}
export default App;
