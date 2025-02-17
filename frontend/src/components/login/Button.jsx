import React from "react";
import "../styles/Join.css"; // Import the CSS file

export const Button = ({ children }) => {
  return (
    <a href="#" className="glow-on-hover">
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
};

