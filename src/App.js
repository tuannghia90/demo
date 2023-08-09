import { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleStart = useCallback(() => {
    // nếu bộ đếm chưa chạy (tức là timerId là null), sẽ chạy Hàm setInterval gọi lại được cung cấp sau mỗi 1000 mili giây (1 giây)
    if (timerId===null) 
    {
      setTimerId(
        setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000)
      );
    }
  }, [timerId]);

  const handleStop = useCallback(() => {
    if (timerId!==null) {
      clearInterval(timerId);
      setTimerId(null);
      setCount(0);
    }
  }, [timerId]);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;

// function httpGetAsync(theUrl,callback){
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function(){
//     if(xmlHttp.readyState==4 && xmlHttp.status ==200) callback(xmlHttp);
//   };
//   xmlHttp.open("Get",theUrl,true);
//   xmlHttp.send(null);
//   }
  
//   test();