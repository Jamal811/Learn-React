import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";
const BookLayout = () => {
  return (
    <div className="container">
      <Link to="/books/1">Book1</Link>
      <Link to="/books/2">Book2</Link>
      <Link to="/books/new">NewBook</Link>
      <Outlet context={{ hello: "World" }} />
    </div>
  );
};

export default BookLayout;
