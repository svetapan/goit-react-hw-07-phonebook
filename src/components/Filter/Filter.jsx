import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../store/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.filter);

  const handleInputChange = (event) => {
    const newFilterValue = event.target.value;
    dispatch(setStatusFilter(newFilterValue));
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
