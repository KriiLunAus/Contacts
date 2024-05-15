import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <nav>
        <Link to="/registration">Register</Link>

        <Link to="/login">Login</Link>
      </nav>
    </>
  );
}
