import React from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import './ContactInfo.css';

const ContactInfo = () => {
    const contact = useSelector(state => state.contactInfo.contact);

    return (
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
                <Button size="small">Delete</Button>
            </CardActions>
        </>
    );
};

export default ContactInfo;