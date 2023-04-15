import React from "react";
import HeaderCss from "./header.module.css";

const Header = () => {
  return (
    <div className="card">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        quis neque eum enim itaque facilis asperiores et, inventore officiis
        ducimus?
      </p>
      <button className={HeaderCss.btn}>Click me</button>
    </div>
  );
};

export default Header;
