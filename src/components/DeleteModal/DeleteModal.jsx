import css from "./DeleteModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operation";
import {
  selectIdForDelete,
  selectNameForDelete,
} from "../../redux/contacts/selectors";

export default function () {
  const dispatch = useDispatch();
  const id = useSelector(selectIdForDelete);
  const name = useSelector(selectNameForDelete);
  return (
    <div className={css.modalWrapper}>
      <h2>Are you sure want to delete {name} from contacts?</h2>
      <div className={css.buttons}>
        <button
          className={css.deleteButton}
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
        <button
          className={css.cancelButton}
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
