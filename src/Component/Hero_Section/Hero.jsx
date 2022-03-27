import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Nav, {
  DropDown1, DropDown10, DropDown11, DropDown12, DropDown13, DropDown2, DropDown3, DropDown4, DropDown5,
  DropDown6, DropDown7, DropDown8, DropDown9
} from '../../Apis/Nav';
import SliderData from "../../Apis/SliderData";
import Li from '../Common/Li';
import './Hero.scss';


const len = SliderData.length;

console.log(len);

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const moveImg = (index) => {
    setSlideIndex(index);
    console.log(slideIndex);
  };
  return (
    <div className="hero__area" id="hero__area">
      <div className="menus">
        <ul className="menus__ul ">
          {Nav.map((navList) => (
            <div className="nav__li flex" key={navList.id}>
              <Li title={navList.title} className="li" />
              <AiOutlineRight className="icon" />
              <ul className="drop__down">
                {navList.id === 1 ? DropDown1.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 2 ? DropDown2.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 3 ? DropDown3.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 4 ? DropDown4.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 5 ? DropDown5.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 6 ? DropDown6.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 7 ? DropDown7.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 8 ? DropDown8.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 9 ? DropDown9.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 10 ? DropDown10.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 11 ? DropDown11.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 12 ? DropDown12.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
                {navList.id === 13 ? DropDown13.map((dropDownLi, index) => (
                  <div className="nav__lid" key={index.id}>
                    <Li className="li">{dropDownLi.title}</Li>
                  </div>
                )) : null}
              </ul>
            </div>

          ))}

        </ul>
      </div>
      <div className="slider__area">
        <div className="slider">

          {

              SliderData.map((slide, index) => (
                <img
                  src={slide.img}
                  alt="photo"
                  key={index.id}
                />
              ))

            }

          <div className="dots flex">
            {SliderData.map((slide, index) => (
              <div
                className={`${slideIndex === index ? "dot active" : "dot"}`}
                onMouseOver={() => moveImg(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
