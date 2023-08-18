import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import { deleteNumber } from "redux/contactsSlice";
import { useDispatch, useSelector } from 'react-redux';



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContact = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  
   return (
    <ul className={css.list}>
      {filterContact !== '' ? (
        [...filterContact].map((contact) => (
          <li className={css.contact} key={contact.id}>
            {contact.name}: {contact.number}
             <button className={css.btn} type='button' onClick={() => dispatch(deleteNumber(contact.id))} >DELETE</button>
          </li>
        ))
      ) : (
        contacts.map(contact => (
          <li className={css.contact} key={contact.id}>
            {contact.name}: {contact.number}
            <button className={css.btn} type='button' onClick={() => dispatch(deleteNumber(contact.id))} >DELETE</button>
          </li>
        ))
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteNumber: PropTypes.func
};