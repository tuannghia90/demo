// tạo 1 mảng các phần thưởng , khi cick thì thay đổi các phần thưởng và hiện lên
import {useState} from 'react'
const gifts = ['CPU','RAM','Keyboard']
function App() {
const [gift, setGift] = useState()

const randomGift = () => {
 const index = Math.floor(Math.random()*gifts.length)
setGift(gifts[index]);
}

  return (
    <div className="App" style={{padding:20}}>
      <h1>{gift || 'Chưa có phần thưởng ' } </h1>
      <button onClick={randomGift} >Lấy thưởng</button>
    </div>
  );
}
export default App;
