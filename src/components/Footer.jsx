import React from "react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <nav className="navbar bottom navbar-dark bg-dark footer-container">
      <span
        style={{
          color: "#cccccc",
          textAlign: "center",
          display: "block",
          width: "100%",
        }}
      >
        Copyrights © {year} by Abhishek Mishra
      </span>
    </nav>
  );
};
export default Footer;
