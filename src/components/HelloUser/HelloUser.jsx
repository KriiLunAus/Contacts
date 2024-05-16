import { selectUserName } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/operations";
import css from "./HelloUser.module.css";

export default function () {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={css.helloWrapper}>
      <p>Hello {userName}</p>
      <button
        onClick={() => {
          dispatch(logOutUser());
        }}
        className={css.btn}
      >
        LogOut
      </button>
    </div>
  );
}
