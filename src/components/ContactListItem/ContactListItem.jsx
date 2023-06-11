import React, { useState, useEffect } from 'react';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact, fetchContacts } from 'store/fetchContacts';

const ContactListItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (isEdit) {
      setNumber(contact.number);
    }
  }, [isEdit, contact]);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setIsEdit(true);
    setNumber(contact.number);
  };

  const handleSave = () => {
    // const updatedContact = { ...contact, name, number };
    dispatch(updateContact({ contactId: contact.id, name, number }))
      .then(() => {
        setIsEdit(false);
        dispatch(fetchContacts());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <li className={css.item} key={contact.id}>
      <span className={css.decor}></span>
      {isEdit ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button className={css.btn} onClick={handleSave}>
            Save
          </button>
          <button className={css.btn} onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          {contact.name}: {contact.number}
          <button className={css.btn} onClick={handleEdit}>
            Edit
          </button>
          <button className={css.btn} onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ContactListItem;
