import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="footer">{year} ⓒ Музей Д.А. Фурманова</div>;
};

export default Footer;
