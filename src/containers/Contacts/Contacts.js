import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../store/actions/contactsActions";

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactsCombine.contacts);
    const loading = useSelector(state => state.contactsCombine.loading);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])

    return (
        <div>
            {Object.keys(contacts).map(c => {
                return (
                    <p>{contacts[c].name}</p>
                )
            })}
        </div>
    );
};

export default Contacts;