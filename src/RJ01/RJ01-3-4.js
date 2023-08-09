import React from 'react';
import { useState } from 'react';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        {isDropdownOpen ? 'Đóng Dropdown' : 'Mở Dropdown'}
      </button>
      {isDropdownOpen && (
        <div>
          <p>profile</p>
          <p>setting</p>
          <p>logout</p>
        </div>
      )}
    </div>
  );
}

export default App;
