// MenuBar.js
import React, { useState } from 'react';
import './test.css'; // Import your CSS file

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? (
          <ion-icon class="icon" name="menu" onClick={toggleMenu}></ion-icon>
          
          
        ) : (
            
              <ion-icon class="icon" name="close"></ion-icon>
        )}
      </button>

      {!isOpen && (
        <div>
          <div>home</div>
          <div>contact</div>
          <div>about</div>
          <div>faq</div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
