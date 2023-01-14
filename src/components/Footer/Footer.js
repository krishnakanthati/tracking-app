import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="copyright">@copyright {year}</div>
      <div className="team">Platform India</div>
      <div className="company">Powered by Tecnotree</div>
    </div>
  );
}

export default Footer;
