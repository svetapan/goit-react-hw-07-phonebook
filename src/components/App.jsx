import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import FetchContactButton from './FetchContactButton/FetchContactButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/fetchContacts';
import { getContacts } from 'store/selectors';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      <h1>Phonebook</h1>
      <FetchContactButton />
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
