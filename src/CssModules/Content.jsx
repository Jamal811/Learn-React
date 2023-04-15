import React from "react";
import ContentCss from "./Content.module.css";

const Content = () => {
  return (
    <div className="card">
      <h1>content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iusto
        quia fugit magni natus officia obcaecati exercitationem a voluptatibus
        harum?
      </p>
      <button className={ContentCss.btn}>click</button>
    </div>
  );
};

export default Content;
