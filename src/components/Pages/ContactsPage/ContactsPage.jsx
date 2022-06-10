import Contacts from 'components/client/Contacts';
import styles from './contacts.module.css';

const ContactsPage = () => {
  return (
    <div>
      <h2 className={styles.title}>Phonebook</h2>
      <Contacts />
    </div>
  );
};

export default ContactsPage;
