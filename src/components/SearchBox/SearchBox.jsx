import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
const SearchBox = () => {
  const value = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();
  return (
    <label className={styles.searchLabel}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(setFilter(event.target.value))}
        className={styles.searchInput}
      />
    </label>
  );
};

export default SearchBox;
