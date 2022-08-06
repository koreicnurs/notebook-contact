import React, {useEffect} from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import './ContactInfo.css';
import {removeContact} from "../../store/actions/contactInfoActions";
import Spinner from "../UI/Spinner/Spinner";
import {getContacts, setPurchasingOpen} from "../../store/actions/contactsActions";
import {useHistory} from "react-router-dom";

const ContactInfo = (props) => {
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contactInfo.contact);
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactInfo.loading);
    const history = useHistory();

    const deleteContactHandler = (name) => {
        contacts.map(c => {
            if(c.name === name) {
               dispatch(removeContact(c.id));
            }
            return null
        });
        dispatch(setPurchasingOpen(false));
    };

    useEffect(() => {

    },[])

    return loading ? (<Spinner/>)
        : contact && (
        <>
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
                <Button size="small">Edit</Button>
                <Button size="small" onClick={() => deleteContactHandler(contact.name)}>Delete</Button>
            </CardActions>
        </>
    );
};

export default ContactInfo;