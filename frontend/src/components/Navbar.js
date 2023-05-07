import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
   const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  return (
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div class="relative justify-between">
          <div class="flex flex-1  sm:items-stretch sm:justify-start">
            <div class="flex  items-center">
              <img
                class="block h-8 w-auto lg:hidden max-[768px]:h-6 max-[768px]:w-32"
                src={require("../assets/hold-vector.png")}
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src={require("../assets/hold-vector.png")}
                alt="Your Company"
              />
            </div>
            
              <div class="flex space-x-6 space-x- max-[768px]:space-x-3 pl-2 relative left-64 max-[768px]:left-0 max-[1368px]:left-20">
                <div className="dropdown">
                  <div className="dropdown-header text-md max-[768px]:text-sm" onClick={toggleDropdown}>
                    INR
                    <FontAwesomeIcon
                      className="arrow"
                      icon={isOpen ? faCaretUp : faCaretDown}
                    />
                  </div>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">INR</li>
                    </ul>
                  )}
                </div>
                <div className="dropdown">
                  <div className="dropdown-header text-md max-[768px]:text-sm" onClick={toggleDropdown2}>
                    BTC
                    <FontAwesomeIcon
                      className="arrow"
                      icon={isOpen2 ? faCaretUp : faCaretDown}
                    />
                  </div>
                  {isOpen2 && (
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">BTC</li>
                      <li className="dropdown-item">ETH</li>
                      <li className="dropdown-item">USDT</li>
                      <li className="dropdown-item">XRP</li>
                      <li className="dropdown-item">TRX</li>
                      <li className="dropdown-item">DASH</li>
                      <li className="dropdown-item">ZEC</li>
                      <li className="dropdown-item">IOST</li>
                      <li className="dropdown-item">WIN</li>
                      <li className="dropdown-item">BIT</li>
                      <li className="dropdown-item">WRX</li>
                    </ul>
                  )}
                </div>
                <div className="btcbutton text-md max-[768px]:text-sm cursor-auto max-[768px]:p-[7px] p-[10px] ">
                    BUY BTC       
                  </div>
              </div>
            
          </div>
        
        </div>
      </div>

    
    </nav>
  );
}

export default Navbar;
