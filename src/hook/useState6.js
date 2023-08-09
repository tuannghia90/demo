
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
const[checked,setChecked]=useState()
console.log(checked);
const handleSubmit = () => {
 console.log({id:checked})
}
  return (
    <div className="App" style={{padding:20}}>
        {/* lọc qua mảng courses 3 phần tử , course là từng phần tử, return ra 3 thẻ div ( có type radio ), key lắp cho thẻ cao nhất là div, ngoài cùng. */}
      {courses.map(course=>(
        <div key={course.id}>
            {/* chọn radio để đổi từ input về radio , chọn course.name để hiện tên khóa học */}
          <input type="radio"
        //   để chỉ chọn 1 lựa chọn , ta cần lấy đc cái id của lựa chọn đó
        // khi ta onchange thì xét đc cái id của khóa học vào biến checked , để khi submit ta có thể lấy id khóa học gửi đi
        // ta truyền vào 1 hàm , gọi setChecked và truyền course.id thì lấy đc course.id ở key =,
        //mỗi lần check thì id sẽ đc in ra ở dòng 22
        // checked chính là id của course khi chúng ta on change
        // sau đó ta lấy checked so sánh với cái course.id   , nếu = thì cho cái input lên , vậy là ta có đc biến checked và hiện ở dòng 24
          checked = {checked===course.id}
          onChange={()=>setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
     

      <button onClick={handleSubmit}>Đăng ký</button>
    </div>
  );
}
export default App;
