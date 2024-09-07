import { useEffect } from 'react';

import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import { FaAddressBook } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { selectError, selectIsLoading } from '../redux/contactsSlice';
import { MagnifyingGlass } from 'react-loader-spinner';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>
        <FaAddressBook className={css.headerIcon} />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <MagnifyingGlass height={80} width={80} />}
      {!isLoading && error && (
        <div className={css.error}>
          Something went wrong... Try again later.
        </div>
      )}
      <ContactList />
    </div>
  );
}

export default App;
