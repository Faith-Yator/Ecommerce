import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { MdAccountCircle, MdArrowDropDown, MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleAccountItemClick = () => {
    setAccountDropdownOpen(false);
    setCategoryDropdownOpen(false);
  };


  return (
    <div>
      <div className={`navbar ${showMenu ? "show-menu" : ""}`}>
        <div className="head">
          <h2>DIGISTIC-ELECTRONICS</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <MdClose /> : <FaBars />}
        </div>

        <div className="links">
          <div>
            <Link to="/" className="nav-link">
              <AiFillHome />
              Home
            </Link>
          </div>
          <div className="dropdown">
            <div className="nav-link" onClick={toggleCategoryDropdown}>
              <AiOutlineShoppingCart />
              Shopping Categories
              <MdArrowDropDown />
            </div>
            {categoryDropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/computer"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  Computers
                </Link>
                <Link
                  to="/homeAppliances"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  Home Appliances
                </Link>
                <Link
                  to="/smartphones"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  SmartPhones & Tablets
                </Link>
                <Link
                  to="/printers"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  Printers & Scanners
                </Link>
                <Link
                  to="/networking"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  Networking Devices
                </Link>
                <Link
                  to="/tvs"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                Tv's & Audios
                </Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <div className="nav-link" onClick={toggleAccountDropdown}>
              <MdAccountCircle />
              Account
              <MdArrowDropDown />
            </div>
            {accountDropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/signin"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  SignIn
                </Link>
                <Link
                  to="/login"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  LogIn
                </Link>
                <Link
                  to="/adminlogin"
                  className="dropdown-item"
                  onClick={handleAccountItemClick}
                >
                  Admin LogIn
                </Link>
              </div>
            )}
          </div>
          <div>
            <Link
              to="/HelpCenter"
              className="nav-link"
              onClick={handleAccountItemClick}
            >
              HelpCenter
            </Link>
          </div>
         
          <div>
            <Link to="/Cart" className="nav-link">
              <AiOutlineShoppingCart />
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
