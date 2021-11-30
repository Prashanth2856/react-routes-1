import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100",
        backgroundColor:"orange",
      }}
    >
      <Link to="/">
        <h3> Home</h3>
      </Link>
      <Link to="/contact">
        {" "}
        <h3> Contact</h3>
      </Link>

      <Link to="/about">
        {" "}
        <h3> About-Us</h3>
      </Link>
      <Link to="/services">
        {" "}
        <h3> Services</h3>
      </Link>
      <Link to="/login">
        {" "}
        <h3> Login</h3>
      </Link>
    </div>
  );
};
