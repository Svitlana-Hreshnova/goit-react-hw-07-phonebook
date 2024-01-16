import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Filter contacts by name:
      <br />
      <input
        className={css.filterInput}
        onChange={handleFilterChange}
        type="text"
        name="filter"
        value={filter}
      ></input>
    </label>
  );
};

export default Filter;
