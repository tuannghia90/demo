// tạo một ô input rồi nhập giá trị vào
// gõ bên ngoài input thì bên trong console thay đổi hoặc ngược lại ( 1 chiều)=> one way binding
// đồng thời cả 2 thì là two-way binding ( 2 chiều)
import {useState} from 'react'

function App() {
  // đặt giá trị đầu là chuỗi rỗng
const [name,setName]=useState('')
console.log(name);
  return (
    <div className="App" style={{padding:20}}>
      <input
      // có value để thay đổi giá trị trong ô input thành BBB trên giao diện khi cick button
      value={name}
      // lắng nghe sự kiện , mỗi lần mình gõ phím thì thay đổi setName trong console
      onChange={e => setName(e.target.value)}
      />
      {/* khi cick sẽ thay đổi dữ liệu trong console thành BBB */}
      <button onClick={()=>setName('Nguyễn Văn BBB')}>Change</button>
    </div>
  );
}
export default App;
