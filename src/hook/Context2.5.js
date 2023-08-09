import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//b4: import ThemeProvider để ôm thẻ div trong App ( vì index.js là cấp cao nhất)
import { ThemeProvider } from './hook/Context2.4.js';
// đây là index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* b4: import ThemeProvider để ôm thẻ div trong App ( vì index.js là cấp cao nhất) */}
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
