import React from "react";
import "./styles.css";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div className="container">
      <div className="app">
        <h1>
          Book {id} {obj.hello}
        </h1>
      </div>
    </div>
  );
};

export default Book;
