import React from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {removeContact} from "../../store/actions/contactInfoActions";
import Spinner from "../UI/Spinner/Spinner";
import {setPurchasingOpen} from "../../store/actions/contactsActions";
import {NavLink} from "react-router-dom";
import './ContactInfo.css';

const ContactInfo = (props) => {
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contactInfo.contact);
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactInfo.loading);

    const deleteContactHandler = (name) => {
        contacts.map(c => {
            if (c.name === name) {
                dispatch(removeContact(c.id));
            }
            return null
        });
        dispatch(setPurchasingOpen(false));
    };

    return loading ? (<Spinner/>)
        : contact && (
        <div className='info-contact'>
            <CardMedia
                className='image-contact-modal'
                component="img"
                image={contact.photo}
                alt={contact.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {contact.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {contact.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {contact.email}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink className='btn-link edit-link' to={`edit/${contact.name}`}>Edit</NavLink>
                <Button size="small" onClick={() => deleteContactHandler(contact.name)}>Delete</Button>
            </CardActions>
        </div>
    );
};

export default ContactInfo;