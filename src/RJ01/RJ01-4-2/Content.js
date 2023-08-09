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

// ta học về TH3
 // ta muốn khi ấn togge thì ra 3 nút cick , mỗi khi cick 1 nút thì ra thông tin của api đó ('products','users','carts')
 import {useEffect, useState} from 'react'
 // b1: khai báo 1 tabs rồi 3 tab bé
 const tabs = ['products','users','carts']
 function Content() {
   const [title,setTitle]=useState('')
   const [products,setProducts]=useState([])
   const [users,setUsers]=useState([])
   const [carts,setCarts]=useState([])
   //b3 : coi như mỗi tab là 1 loại
   const [type,setType] = useState('products')
   console.log(type)
   // b6 khi component re-render lại thì useEfffect sẽ kiểm tra lại [deps] trước và sau render khác nhau không
   // nếu khác gọi lại callback {fetch...(products)},  khi change giữa các 'products','users','carts' thì cái type thay đổi nên ta truyền type vào [deps]
     useEffect(()=>{
       //b7: ở đuôi web tương ứng tên mỗi tab được, mỗi khi ta thay đổi tab => [type] thay đổi => gọi lại callback => fetch lại web theo type mới
       fetch(`https://dummyjson.com/${type}`)
       .then(res=>res.json())
       .then(data=>{
        if (type === 'products') {
          setProducts(data.products);
        } else if (type === 'users') {
          setUsers(data.users);
        } else if (type === 'carts') {
          setCarts(data.carts);
        }
      });
  }, [type]);
 
   return (
     <div  style={{padding:20}}>
       {/* b2: chạy 1 vòng tabs to để tạo ra 3 tab bé, tab có nội dung # nên ta đặt key là tab luôn */}
       {tabs.map(tab=>(
         <button key={tab}
         // b5 : ta thay đổi style để biết tab nào đang được chọn, nếu type = tab thì ra {object} đầu , nếu # ra {trống}
         style={type === tab ? {
           color :'#fff',backgroundColor:'#333',
         }:{}}
         // b4: khi click thì xét Settype mỗi tab , sẽ re-render lại component mình lựa chọn ( post/ coment/ album)
         onClick={()=> setType(tab)}>
           {tab}
         </button>
       ))}
      {type === 'products' && (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>description: {product.description}</p>
                <p>discountPercentage: {product.discountPercentage}</p>
                <p>rating: {product.rating}</p>
                <p>brand: {product.brand}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {type === 'users' && (
        <>
         
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {type === 'carts' && (
        <>
           
          <ul>
            {carts.map((cart) => (
              <li key={cart.id}>
                <h3>Cart ID: {cart.id}</h3>
                <ul>
                  {cart.products.map((product) => (
                    <li key={product.id}>
                      {product.title} - Quantity: {product.quantity} - Total: {product.total}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
      
     </div>
   
   );
 }
 export default Content;
 