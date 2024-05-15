import { NavLink } from "react-router-dom";
import Authorization from "../Authorization/Authorization";
import clsx from "clsx";

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <Authorization />
      </nav>
    </>
  );
}
