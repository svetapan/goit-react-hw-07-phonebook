import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';
import { getFilter } from 'store/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);

  const handleInputChange = (event) => {
    const newFilterValue = event.currentTarget.value;
    dispatch(setFilter(newFilterValue));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default Filter;
