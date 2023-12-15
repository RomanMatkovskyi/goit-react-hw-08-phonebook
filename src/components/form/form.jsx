import s from './form.module.css';
import PropTypes from 'prop-types';

import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const submitForm = event => {
    event.preventDefault();

    let contactExists = false;
    const form = event.target;
    let nickname = form.elements.name.value;
    let number = form.elements.number.value;
    let data = { name: nickname, phone: number };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === nickname.toLowerCase()) {
        contactExists = true;
        alert('This contact is already in your list');
      }
    });
    if (!contactExists) {
      dispatch(addContact(data));
    }

    form.reset();
  };

  return (
    <>
      <form onSubmit={submitForm} className={s.form}>
        <label htmlFor="nameInput" className={s.nameinput}>
          Name
        </label>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="phoneInput">Number</label>
        <input
          type="tel"
          name="number"
          id="phoneInput"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={s.addbutton}>
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  handleSubmitForm: PropTypes.func,
};

export default Form;
