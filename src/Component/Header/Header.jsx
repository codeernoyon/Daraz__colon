import React from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import perImg from '../../assets/header/1.png';
import Logo from '../../assets/header/logo.png';
import Input from '../Common/Input';
import "./Header.scss";

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="topHeader">
        <ul className="top__ul">
          <li className="active">SAVE MORE ON APP</li>
          <li>  SELL ON DARAZ</li>
          <li>  CUSTOMER CARE</li>
          <li> TRACK MY ORDER</li>
          <li> SIGNUP / LOGIN</li>
          <li>  DARAZ AFFILIATE PROGRAM </li>
          <li> ভাষা</li>
        </ul>
      </div>
      <nav>
        <div className="main__ul">
          <div className="img">
            <img src={Logo} alt="image" />
          </div>
          <div className="input">
            <Input placeholder="Search in Daraz" className="inputs" />
            <div className="search__icon">
              <FiSearch className="icon" />
            </div>
          </div>
          <div className="cart">
            <FiShoppingCart />
          </div>
          <div className="percentage__img">
            <img src={perImg} alt="image" />
          </div>
        </div>
      </nav>
    </header>
  );
}
