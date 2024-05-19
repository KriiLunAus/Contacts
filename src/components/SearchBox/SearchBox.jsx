import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { useState } from "react";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  const nameFromState = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const name = evt.target.value;
    setInputValue(nameFromState);
    dispatch(changeFilter(name));
  };

  return (
    <div className={css.formGroup}>
      <label className={css.label} htmlFor="findContact">
        Find contacts by name
      </label>
      <input
        className={css.field}
        onChange={handleChange}
        type="text"
        id="findContact"
      />
    </div>
  );
};
export default SearchBox;
