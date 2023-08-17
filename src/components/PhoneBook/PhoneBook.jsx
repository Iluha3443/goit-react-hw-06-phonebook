import React, {useState} from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import useLocaleStorage from '../hooks/locale.storage';
import { useDispatch, useSelector } from 'react-redux';
import { handleSubmit } from "redux/contactsSlice";




const PhoneBook = () => {
    const [contacts, setContacts] = useLocaleStorage('contacts',[]);
    const dispatch = useDispatch();
    
    const addContact = (evt) => {
        evt.preventDefault();
        const nameContact = evt.target.name.value;
        const numberTel = evt.target.number.value;
        const contact = {
            id: nanoid(),
            name: nameContact,
            number: numberTel,
        }
        dispatch(handleSubmit(contact))
    }

         return (
             <>
                 <ContactForm Submit={addContact} />
                 <Filter /> 
                 <ContactList/>
             </>
         )
    };


export default PhoneBook;