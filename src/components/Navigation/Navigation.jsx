import { NavLink } from "react-router-dom";
import Authorization from "../Authorization/Authorization";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import HelloUser from "../HelloUser/HelloUser";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navBtns, isActive && css.active);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.navigWrapper}>
      <nav className={css.linkWrapper}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      </nav>

      {isLoggedIn ? <HelloUser /> : <Authorization />}
    </div>
  );
}
