import { useDispatch } from "react-redux";
import { useId } from "react";
import { searchByName } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={`search-${id}`}>Find contacts by name</label>
      <input
        name="search"
        type="text"
        id={`search-${id}`}
        onChange={handleSearch}
        className={css.input}
      />
    </div>
  );
}