
// lấy đc giá trị của name và email ở 2 cột input khi ấn đăng ký
// đây là two-way binding
import {useState} from 'react'
function App() {
const [firstname,setFirstName]=useState('')
const [lastname,setLastName]=useState('')
const [email,setEmail]=useState('')
const handleSubmit = () => {
  console.log({
    firstname,lastname,email
  })
}

  return (
    <div style={{backgroundColor:'#6d8ce3', textAlign:"center",height: "500px" , paddingTop:"50px"}}>
    <h1>SUBSCRIBE</h1>
    <p style={{margin:'50px'}}>Sign up with your email address to receive news and updates</p>
    <div>
    <input placeholder='First name' type='text' size="25" style={{padding:'20px', borderRadius:'10px', margin:'5px'}}
     onChange={e => setFirstName(e.target.value)}></input>
    <input placeholder='Last name' type='text' size="25" style={{padding:'20px', borderRadius:'10px', margin:'5px'}}
      onChange={e => setLastName(e.target.value)}></input>
    <input placeholder='Email' type='text' size="25" style={{padding:'20px', borderRadius:'10px', margin:'5px'}}
      onChange={e => setEmail(e.target.value)}></input>
    </div>
    <button onClick={handleSubmit} type="button"  style={{padding:"15px", backgroundColor:"red" , width: '300px',borderRadius:'10px',marginTop:'30px' }}>Subscribe</button>
     </div>


   
  );
}
export default App;
