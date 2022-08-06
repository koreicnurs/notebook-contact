import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useRouteMatch} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import {Button} from "@mui/material";
import {setPurchasingOpen} from "../../store/actions/contactsActions";
import {editContactData, getContact} from "../../store/actions/contactInfoActions";

const EditDish = () => {
    const dispatch = useDispatch();
    const contactData = useSelector(state => state.contactInfo.contact);
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactInfo.loading);
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        editContactHandler(match.params.id);
    }, [match.params.id]);

    useEffect(() => {
        setContact(contactData);
    }, [contactData]);

    const editContactHandler = (name) => {
        contacts.map(c => {
            if (c.name === name) {
                match.params.id = c.id
                dispatch(getContact(match.params.id));
                dispatch(editContactData(match.params.id))
            }
            return null
        });
        dispatch(setPurchasingOpen(false));
    };

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;

        setContact(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmitHandler = async e => {
        e.preventDefault();
        await dispatch(editContactData(match.params.id, contact));
        history.push('/');
    };

    return loading ? (<Spinner/>) : contact && (

        <>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    className="Input"
                    name="name"
                    value={contact.name}
                    onChange={onInputChange}
                    placeholder="Name"
                />
                <input
                    type="phone"
                    className="Input"
                    name="phone"
                    value={contact.phone}
                    onChange={onInputChange}
                    placeholder="Phone"
                />
                <input
                    type="email"
                    className="Input"
                    name="email"
                    value={contact.email}
                    onChange={onInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    className="Input"
                    name="photo"
                    value={contact.photo}
                    onChange={onInputChange}
                    placeholder="Photo"
                />
                Photo preview <img src={contact.photo} alt={contact.name}/>
                <Button variant="contained" type='submit'>Save</Button>
                <Button variant="contained" type='button' onClick={() => history.push('/')}>Back to Contacts</Button>
            </form>
        </>
    );
};

export default EditDish;