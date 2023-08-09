
// lấy đc giá trị của name và email ở 2 cột input khi ấn đăng ký
// đây là two-way binding
import {useState} from 'react'
function App() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const handleSubmit = () => {
  console.log({
    name,email
  })
}
console.log(name);
  return (
    <div className="App" style={{padding:20}}>

      <input
      value={name}
      onChange={e => setName(e.target.value)}
      />

       <input
      value={email}
      onChange={e => setEmail(e.target.value)}
      />
      
      <button onClick={handleSubmit}>Đăng ký</button>
    </div>
  );
}
export default App;
