import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex ",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "20px 0",
      }}
    >
      <span>Reduxation</span>
      <div>
        <Link className="navLink" style={{ fontWeight: "bolder" }} to={"/"}>
          Home
        </Link>
        <Link
          className="navLink"
          style={{ margin: "15px", fontWeight: "bolder" }}
          to={"/cart"}
        >
          Cart
        </Link>
        <span> item:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
