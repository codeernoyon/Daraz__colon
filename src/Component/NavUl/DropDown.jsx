import React from 'react';
import Nav, { DropDown12, DropDown13 } from '../../Apis/Nav';

function DropDown() {
  return (
    <>
      {Nav.map((navList) => (
        <div>
          {navList.id === 1 ? DropDown13.map((dropDownLi, index) => (
            <li>{dropDownLi.title}</li>
          )) : null}
          {navList.id === 2 ? DropDown12.map((dropDownLi, index) => (
            <li>{dropDownLi.title}</li>
          )) : null}
        </div>
      ))}

    </>
  );
}

export default DropDown;
