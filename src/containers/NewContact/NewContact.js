import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import {createContact} from "../../store/actions/contactsActions";

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

export default AddDish;