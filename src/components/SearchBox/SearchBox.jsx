import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label className={css.searchBoxLabel} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.searchBoxInput}
        type="text"
        name="search"
        id="search"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
