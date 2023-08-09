
// tạo todo list , khi gõ công việc rồi ấn add thì tên công việc đó hiện bên dưới và xóa dữ liệu hiển thị ô input b1->6
// ở bước 7 đổ ra: ta muốn khi add xong công việc , f5 ko bị mất dữ liệu đã hiện ở li

import {useState} from 'react'

function App() {
  // bước 8: khi f5 , dữ liệu trong localstore vẫn còn nhưng hiện thị chưa có, giờ ta lấy dữ liệu từ localstore ra
  // localStorage.getItem('jobs') khi này chỉ là chuỗi json , ta cần thêm  JSON.parse để chuyển ngược lại chuỗi đó thành mảng ( xem trên console)
  const storeJobs = JSON.parse(localStorage.getItem('jobs'))
  console.log(storeJobs)
  // bước 3: sau khi map , ta tạo job , có useState là chuỗi rỗng lúc đầu ở ô input
  const [job,setJob] = useState('')
  // bước 1: ta có 1 danh sách công việc sẽ là jobs ,trả về 1 mảng [] , lúc đầu chưa có gì thì useState là mảng trống
  // bươc 9: ta truyền danh sách công việc dạng mảng đã lưu storeJobs vào useState để hiện thị ra dữ liệu khi ta f5
  // nhưng có trường hợp ban đầu , ta chưa add thì sẽ chưa có dữ liệu=> chưa có storeJobs , ta kiểm tra ?? 
  // nếu storeJobs chưa có hoặc underfile thì useState sẽ lấy vế sau là mảng trống
  const [jobs,setJobs]=useState([storeJobs ?? []])
  // log ra để kiểm tra ở bước 4
  console.log(job);
  // bước 6: ở hàm handleSubmit , ta đặt setJobs là 1 mảng mới gồm bảo lưu các job cũ , thêm job mới
  // sau đó ta đặt lại setJob hiện thi ô input bằng trống
  const handleSubmit =() =>{
    // setJobs(prev => [...prev,job]);
    // setJob('')
    // console.log(jobs)
    // bước 7: khi console.log(jobs) dòng trên thì chưa thể lấy jobs mới nhất , sẽ bị chậm 1 bước vì lúc đó mới gọi hàm để lên lịch trình dòng 16 17
    //cho đến khi gọi lại hàm App thì lúc đó jobs dòng 10 mới đc xét lại
    // để lấy được jobs dòng trên 
    setJobs(prev =>{
      const newJobs = [...prev,job]
      // lưu vào local , nhận lại được chuỗi, sau khi add ta xem được ở bảng view=>application=>localstore , kéo bảng bên phải tìm key: jobs sẽ thấy value là công việc vừa add
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs)
      return newJobs 
    } );  
  }
  return (
    <div className="App" style={{padding:20}}>
      {/* tạo 1 thẻ input để nhập dữ liệu */}
      {/* bước 4: ta truyền value = job, khi onChange ta bắt sự kiện , đặt setjob ( lúc này là hiện thị dòng input) sẽ = ký tự khi ta gõ */}
      <input value={job} onChange={e=>setJob(e.target.value)} />
      {/* tạo thẻ button để ấn thêm */}
      {/* bước 5 , khi cick gọi hàm handleSubmit */}
      <button onClick={handleSubmit} >Add</button>
      <ul>
        {/* bước 2: jobs sẽ map ( thao tác trên 1 mảng và trả về mảng mới) qua từng phần tử job ,
         key tự đặt là index, job nhận được sẽ render làm childen của li */}
        {jobs.map((job,index)=>(
          <li key={index}>{job}</li>
        ))}
        
      </ul>
    </div>
  
  );
}
export default App;
