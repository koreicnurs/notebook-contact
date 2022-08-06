import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../store/actions/contactsActions";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import './Contacts.css';
import {NavLink} from "react-router-dom";

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactsCombine.loading);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])

    return (
        <div className='contacts'>
            <NavLink className='btn-link add-link' to='/new'>Add Contact</NavLink>
            {Object.keys(contacts).map(c => {
                const contact = contacts[c]
                return (
                    <Card className='contact' key={c}>
                        <CardMedia
                            className='img-contact'
                            component="img"
                            image={contact.photo}
                            alt={contact.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {contact.name}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    );
};

export default Contacts;