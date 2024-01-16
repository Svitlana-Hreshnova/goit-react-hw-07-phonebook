import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/operation';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const InputIdPhone = nanoid();
  const InputIdName = nanoid();

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    const user = {
      id: 'id ' + nanoid(),
      name,
      phone,
    };

    dispatch(addContact(user));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name:
        <br />
        <input
          className={css.formInput}
          onChange={handleNameChange}
          type="text"
          value={name}
          name="name"
          id={InputIdName}
          required
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <br />
        <input
          className={css.formInput}
          onChange={handleNameChange}
          type="tel"
          value={phone}
          name="number"
          id={InputIdPhone}
          required
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
