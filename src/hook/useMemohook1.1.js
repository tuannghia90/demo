// đây là App.js

// yêu cầu đầu bài là có iput nhập tên sp , 1 input nhập giá sản phẩm, ấn add thì hiện ra tổng giá phía trên , dưới có tên và giá sp từng sp
// yêu cầu 2: khi add xong thì clear ô input, sau đó focus vào ô input name
// memo ôm 1 react component , tránh component bị render trong tình huống k cần thiết
// useMemo là 1 hook viết trong thân 1 function component,tránh thực hiện 1 logic k cần thiết


import { useMemo, useState,useRef}from 'react'

function App() {
  const [name,setName]= useState('')
  const [price,setPrice]= useState('')
  const [products,setProducts]= useState([])
  //b4 : để focus thì ta cần lấy cái dom element
  const nameRef = useRef()
  //b1: viết logic : ta đặt setProducts vào 1 mảng mới, cho sp cũ vào , thêm 1 object vào đằng sau gồm tên và giá
  const handleSubmit = () => {
    setProducts([...products,{
      name,
      //chú ý gt từ input trả ra là dạng chuỗi string , price cần conver về dạng số , dùng price : Number(price) hoặc price : parseInt(price) hoặc price :+price
      price: +price
    }])
    //b3 : xét bằng chuỗi rỗng của setname và set price
    setName('')
    setPrice('')
    //b7
    nameRef.current.focus()
  }
    //b2 : dùng reduce tính tổng tiền . Nhưng khi ta chỉ nhập input mà chưa add , total bị tính toán lại không cần thiết , vì vậy ta sẽ dùng use Memo
    // đối số đầu tiên là nhận 1 call back là hàm mình tính toán, đối số 2 là [deps] , nếu [dep] rỗng thì chỉ tính 1 lần , lần sau trả về kq như vậy
    const total = useMemo(()=>{
     const result=  products.reduce((result,prod)=> 
    {console.log('tính toán lại...')
     return  result + prod.price
    },0 )
    return result
    },[products])
  return (
    <div className="App" style={{padding:20}}>
      <input
      //b5 thêm ref vào input
        ref={nameRef}
        value={name}
        placeholder='Enter Name...'   
        onChange={e=>setName(e.target.value)}   
      />
      <br/>
      <input
        value={price}
        placeholder='Enter Price...'   
        onChange={e=>setPrice(e.target.value)}   
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      Total: {total}
      <ul>
        {products.map((product,index)=>(<li key={index}>{product.name}-{product.price}</li>))}
      </ul>
    </div>
  
  );
  
}
export default App;

