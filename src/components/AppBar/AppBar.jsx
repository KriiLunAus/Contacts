import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
export default function AppBar() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.navigWrapper}>
      <Navigation />
      {isRefreshing}
      {isLoggedIn ? <UserMenu /> : !isRefreshing && <AuthNav />}
    </div>
  );
}
