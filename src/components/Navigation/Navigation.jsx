import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function () {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navBtns, isActive && css.active);
  };

  return (
    <>
      <nav className={css.linkWrapper}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </>
  );
}
