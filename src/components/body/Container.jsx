import React from 'react'

const Container = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="add-to-cart-button">
      {label}
    </button>
  );
};

export default Container;
