import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, setPurchasingOpen} from "../../store/actions/contactsActions";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {NavLink, useHistory} from "react-router-dom";
import './Contacts.css';
import Modal from "../../components/UI/Modal/Modal";
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

    const d = (id) => {

    };

    return (
        <>
            <Modal
                show={purchasing}
                closed={purchaseCancelHandler}
            >
                <ContactInfo/>
            </Modal>
            <div className='contacts'>
                <NavLink className='btn-link add-link' to='/new'>Add Contact</NavLink>
                {contacts.map(c => {
                    return (
                        <Card className='contact' key={c.id} onClick={() => purchaseHandler(c.id)}>
                            <CardMedia
                                className='img-contact'
                                component="img"
                                image={c.photo}
                                alt={c.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {c.name}
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