import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
import { useEffect } from 'react';
import { deleteContact } from '../../redux/operation';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedName = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  if (error === 'rejected') {
    return <div>Not found contacts</div>;
  }

  if (contacts.length === 0) {
    return <div>Add your contacts</div>;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          {contact.name}: {contact.number}{' '}
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
