import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useRouteMatch} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import {setPurchasingOpen} from "../../store/actions/contactsActions";
import {editContactData, getContact} from "../../store/actions/contactInfoActions";
import Form from "../../components/Form/Form";

const EditDish = () => {
    const dispatch = useDispatch();
    const contactData = useSelector(state => state.contactInfo.contact);
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactInfo.loading);
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        const editContactHandler = () => {
            contacts.map(c => {
                if (c.name === match.params.id) {
                    match.params.id = c.id;
                    dispatch(getContact(match.params.id));
                    dispatch(editContactData(match.params.id));
                }
                return null;
            });
            dispatch(setPurchasingOpen(false));
        };
        editContactHandler();
    }, [dispatch, contacts, match.params]);

    useEffect(() => {
        setContact(contactData);
    }, [contactData]);

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
        <Form
            submitFormData={onSubmitHandler}
            onInputChange={onInputChange}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            photo={contact.photo}
        />
    );
};

export default EditDish;