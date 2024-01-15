import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Filter contacts by name:
      <br />
      <input
        type="text"
        className={css.filterInput}
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
