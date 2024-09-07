import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <FaUser className={css.contactIcon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.contactIcon} />
          {contact.number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
