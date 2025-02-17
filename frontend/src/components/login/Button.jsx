import React from "react";
import "../styles/Join.css";

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

