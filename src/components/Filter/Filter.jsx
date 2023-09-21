import { FilterInput, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/FilterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };


  return (
    <FilterInput>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Input
        placeholder="Search..."
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterInput>
  );
};
