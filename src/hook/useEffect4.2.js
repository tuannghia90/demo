 //1.update Dom (f8 blog title)
 //2. Call API
 //3.Listen Dom events : scroll/resize
 //4.CleanUp 
  //-remove listerner / unsubcribe
  //-clear timers
//useEffect  dùng khi thực hiện các side effect , khi có tác động xảy ra thì có thay đổi dữ liệu
// ví dụ như update DOM, call API nhận lại dữ liệu rồi sử dụng dữ liệu đó, listen Dom event,removeEventListener,unsubscribe
//useEffect chứa 2 đối số , 1 là callback bắt buộc , ta tự viết code để thực hiện thay đổi,
// thứ 2 là mảng phụ thuộc dữ liệu gọi là dependency viết tắt là deps không bắt buộc
// nên ta có chia ra ít nhất 3 trường hợp 
//1.useEffect(callback) 
  //gọi call back mỗi khi component re-render (ở đây là onchange ở input)
  //gọi call back mỗi khi component thêm element vào DOM ( nó tạo xong thẻ div ở retun mới chạy useEffect)
//2.useEffect(callback,[]) 
 // chỉ gọi callback 1 lần khi component mounted (thời điểm gắn 1 Comment vào)
//3.useEffect(callback,[deps])
// deps là biến truyền từ ngoài vào, có thể là useState nằm trong component
// callback được gọi lại mỗi khi deps thay đổi
//------------------------------------
// Chung: cả 3 TH thì callback luôn được gọi sau khi được mounted (thời điểm gắn 1 Comment vào)
// 2.cleaup function được gọi trước khi companent unmounted
// 3. cleaup function được gọi trước khi callback được gọi (trừ lần mounted đầu tiên)

// listen Dom events
// cách làm, vấn đề xảy ra và cách khắc phục
// scroll : cuộn , Résize : thay đổi kích thước
// yêu cầu khi ta cuộn >200px thì có hiện nút mũi tên xuống , còn <200px thì ẩn
// 2.cleaup function được gọi trước khi companent unmounted

 import {useEffect, useState} from 'react'

 const tabs = ['posts','comments','albums']
 function Content() {
   const [title,setTitle]=useState('')
   const [posts,setPosts]=useState([])
   //b4: khai báo show , quy ước usestate ẩn hiện
   const [showGoToTop,setShowGoToTop] = useState(false)

   const [type,setType] = useState('posts')
   console.log(type)

     useEffect(()=>{  
       fetch(`https://jsonplaceholder.typicode.com/${type}`)
       .then(res=>res.json())
       .then(posts=>{
         setPosts(posts);
       })
     },[type])
     // b1 : viết useEffcet mới , truyền call back , add mảng rỗng [], chỉ cần add event lister 1 lần , mỗi khi even kích hoạt sẽ gọi lại callback
     useEffect(()=>{

        //b3: khai báo handScroll
        const handScroll =()=>{
        //b5 xét đk
            if(window.scrollY >=200)
            {   
                // show
                setShowGoToTop(true)
            }
            else
            {
                //hide
                setShowGoToTop(false)
            }
        }
        //b2: add event cuộn scroll,nhận even handScroll ( tức là mỗi khi cuộn sroll sẽ gọi callback là hàm handScroll)
        window.addEventListener('scroll',handScroll);
        console.log('addEventListener');
        //b8 khi ta toggle ( tắt ) thì useeffect đóng còn window.addEventListener vẫn chạy gây rò rỉ bộ nhớ,
        // khi ta bật lại toggle thì chạy lại addEventListener được tạo mới , còn addEventListener cũ vẫn còn nên ta phải xóa đi
        //cleanup function : return remove sự kiện lắng nghe chạy ngay trước khi ta tắt toggle
        return () => {
            window.removeEventListener('scroll',handScroll);
            console.log('removeEventListener');
        }

     },[])
   return (
     <div  style={{padding:20}}>

       {tabs.map(tab=>(
         <button key={tab}

         style={type === tab ? {
           color :'#fff',backgroundColor:'#333',
         }:{}}
        
         onClick={()=> setType(tab)}>
           {tab}
         </button>
       ))}
       {
     <>
      <input value={title} onChange={e=>setTitle(e.target.value)}/>
      <ul>
       {posts.map(post=>(
       
         <li key={post.id}>{post.title || post.name}</li>
       ))}
       
      </ul>
      </>
       }
       {/* b7 xét dk đúng sẽ hiện button */}
       {
        showGoToTop && (
            <button
            style={{
                position:'fixed',
                right:20,
                bottom:20,
            }}
            >Go to top</button>
        )
       }
      
     </div>
   
   );
 }
 export default Content;
 