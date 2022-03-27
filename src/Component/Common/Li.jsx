import React from 'react';

function Li({ className, title, children }) {
  return (
    <li className={className}>
      <a href="#home">
        {title}
        { children }
      </a>
    </li>
  );
}

export default Li;
