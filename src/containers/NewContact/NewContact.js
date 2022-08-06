import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import {createContact} from "../../store/actions/contactsActions";
import Form from "../../components/Form/Form";

const AddDish = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.contactsCombine.loading);
    const history = useHistory();

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
        await dispatch(createContact(contact));
        history.push('/');
    };

    return loading ? (<Spinner/>) : (
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

export default AddDish;