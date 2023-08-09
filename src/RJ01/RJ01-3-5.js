
// tạo todo list , khi gõ công việc rồi ấn add thì tên công việc đó hiện bên dưới và xóa dữ liệu hiển thị ô input b1->6


import {useState} from 'react'

function App() {

  // bước 3: sau khi map , ta tạo job , có useState là chuỗi rỗng lúc đầu ở ô input
  const [job,setJob] = useState('')
  // bước 1: ta có 1 danh sách công việc sẽ là jobs ,trả về 1 mảng [] , lúc đầu chưa có gì thì useState là mảng trống
 
  const [jobs,setJobs]=useState([])
  // log ra để kiểm tra ở bước 4
  console.log(job);
  // bước 6: ở hàm handleSubmit , ta đặt setJobs là 1 mảng mới gồm bảo lưu các job cũ , thêm job mới
  // sau đó ta đặt lại setJob hiện thi ô input bằng trống
  const handleSubmit =() =>{
    setJobs(prev => [...prev,job]);
    setJob('')
    console.log(jobs)

  }
  //bước 8: tạo 1 hàm xóa 1 công việc , truyền vị trí, danh sách cv cũ Jobs sẽ tạo ra ds cv mới updateJobs loại trừ vị trí cv đã chọn
  // đặt setjob là danh sách mới
  const handleDeleteJobs = (index) => {
    const updatedJobs = jobs.filter((job, i) => i !== index);
    setJobs(updatedJobs);
  };
  return (
    <div className="App" style={{padding:20}}>
      {/* tạo 1 thẻ input để nhập dữ liệu */}
      {/* bước 4: ta truyền nội dung ký tự trong thẻ input là value = job, khi onChange ta bắt sự kiện , đặt setjob ( lúc này là hiện thị dòng input) sẽ = ký tự khi ta gõ */}
      <input value={job} onChange={e=>setJob(e.target.value)} />
      {/* tạo thẻ button để ấn thêm */}
      {/* bước 5 , khi cick gọi hàm handleSubmit */}
      <button onClick={handleSubmit} >Add</button>
      <ul>
        {/* bước 2: jobs sẽ map ( thao tác trên 1 mảng và trả về mảng mới) qua từng phần tử job ,
         key tự đặt là index, job nhận được sẽ render làm childen của li */}
        {jobs.map((job,index)=>(
          <li key={index}>{job}
          {/* bước 7: tạo thẻ button có nội dung xóa , truyền hàm xóa */}
          <button onClick={() => handleDeleteJobs(index)}>Xóa</button>
          </li>
          
        ))}
        
      </ul>
    </div>
  
  );
}
export default App;


