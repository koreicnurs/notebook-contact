import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, setPurchasingOpen} from "../../store/actions/contactsActions";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {NavLink, useHistory} from "react-router-dom";
import './Contacts.css';
import Modal from "../../components/UI/Modal/Modal";
import EditContact from "../EditContact/EditContact";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import {getContact} from "../../store/actions/contactInfoActions";

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactsCombine.loading);
    const purchasing = useSelector(state => state.contactsCombine.purchasing);
    const history = useHistory();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const purchaseHandler = (id) => {
        dispatch(setPurchasingOpen(true));
        dispatch(getContact(id))
    };

    const purchaseCancelHandler = () => {
        dispatch(setPurchasingOpen(false));
    };

    const purchaseEdit = () => {
        history.push('/edit');
    };

    return (
        <>
            <Modal
                show={purchasing}
                closed={purchaseCancelHandler}
            >
                <ContactInfo
                    // imageContact={}
                    // altImage={}
                    // contactName={}
                    // contactPhone={}
                    // contactEmail={}
                    // editContact={}
                    // deleteContact={}
                />
            </Modal>
            <div className='contacts'>
                <NavLink className='btn-link add-link' to='/new'>Add Contact</NavLink>
                {Object.keys(contacts).map(c => {
                    const contact = contacts[c]
                    return (
                        <Card className='contact' key={c} onClick={() => purchaseHandler(c)}>
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
        </>

    );
};

export default Contacts;