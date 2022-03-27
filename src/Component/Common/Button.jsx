import React from 'react';

function Button({ className, title }) {
  return (
    <button type="button" className={className}><a href="#hone">{title}</a></button>
  );
}

export default Button;
