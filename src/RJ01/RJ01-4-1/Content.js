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
  //gọi call back mỗi khi component re-render 
  //gọi call back mỗi khi component thêm element vào DOM ( nó tạo xong thẻ div ở retun mới chạy useEffect)
//2.useEffect(callback,[]) 
 // chỉ gọi callback 1 lần khi component mounted (thời điểm gắn 1 Comment vào)
//3.useEffect(callback,[deps])
// 
//------------------------------------
// Chung: cả 3 TH thì callback luôn được gọi sau khi được mounted (thời điểm gắn 1 Comment vào)

// đây là trường hợp 2 callback,[]
// ở đây chỉ muốn thực hiện logic 1 lần sau khi component được mounted và không muốn gọi lại khi component render 
// nếu ta không cho [], nó rơi vào TH 1 , gọi callback mỗi khi component render( nếu ta gõ input )
// hoặc mỗi khi ta setPost => render companent , gọi lại callback useEffect , lại call api , lại setPost tạo vòng lặp , máy sẽ chậm
import {useEffect, useState} from 'react'

function Content() {
  
  const [products,setProducts]=useState([])

    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then((res)=>res.json())
      .then((data)=>{
        setProducts(data.products);
        console.log(data.products)
      })
    },[])
  return (
    <div  style={{padding:20}}>
     <ul>
      {products.map(product=>(
        <li key={product.id}>title: {product.title}, description: {product.description}, price: {product.price}, 
        discountPercentage: {product.discountPercentage}, rating: {product.rating}</li>
      ))}
     </ul>
    </div>
  );
}
export default Content;
