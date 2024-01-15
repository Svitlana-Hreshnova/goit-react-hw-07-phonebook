import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    const input = e.target.value.replace(/\D/g, '');
    setNumber(input);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Please enter both name and number.');
      return;
    }

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name:
        <br />
        <input
          type="text"
          className={css.formInput}
          name="name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <br />
        <input
          type="tel"
          className={css.formInput}
          name="number"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
