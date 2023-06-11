import React from 'react';
import css from './FetchContactButton.module.css';
import { useDispatch } from 'react-redux';
import {fetchContacts} from 'store/fetchContacts';

const FetchContactButton = () => {
    const dispatch = useDispatch();
    
    const handleClick = evt => {
      evt.preventDefault();
      dispatch(fetchContacts());
      // console.log(contacts)
  };

  return (
    <button className={css.btn} type="submit" onClick={handleClick}>
      Fetch contacts
    </button>
  );
};

export default FetchContactButton;
