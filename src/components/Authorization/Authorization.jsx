import { NavLink } from "react-router-dom";
import css from "./Authorization.module.css";
import clsx from "clsx";
export default function () {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navBtns, isActive && css.active);
  };
  return (
    <>
      <nav className={css.linksWrapper}>
        <NavLink className={buildLinkClass} to="/registration">
          Register
        </NavLink>

        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
      </nav>
    </>
  );
}
