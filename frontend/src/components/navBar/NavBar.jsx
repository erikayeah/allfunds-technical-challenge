import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to={"/"}>
        <button>ALL NEWS</button>
      </Link>
      <Link to={"/archived"}>
        <button>ARCHIVED NEWS</button>
      </Link>
    </>
  );
};

export default NavBar;
