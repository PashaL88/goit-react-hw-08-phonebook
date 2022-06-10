import { useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {
  getContacts,
  getError,
  getLoading,
} from 'redux/contacts/contactsSelector';
import styles from './contacts.module.css';
import * as operations from 'redux/contacts/contacts-operations';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const Contacts = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(operations.contactsFetch());
  }, [dispatch]);

  const addContacts = data => {
    dispatch(operations.addContact(data));
  };

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredContacts = useCallback(() => {
    const filterText = filter.toLowerCase();
    const result = contacts.filter(item => {
      const name = item.name.toLowerCase().includes(filterText);
      return name;
    });
    return result;
  }, [contacts, filter]);

  const filteredContacts = getFilteredContacts();
  return (
    <div className={styles.contacts}>
      <ContactForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {Boolean(contacts.length) && (
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
};

export default Contacts;
