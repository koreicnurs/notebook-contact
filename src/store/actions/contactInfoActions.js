import axiosApi from "../../axiosApi";
import {getContacts} from "./contactsActions";

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

export const EDIT_CONTACT_REQUEST = 'EDIT_CONTACT_REQUEST';
export const EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS';
export const EDIT_CONTACT_FAILURE = 'EDIT_CONTACT_FAILURE';

export const fetchContactRequest = () => ({type: FETCH_CONTACT_REQUEST});
export const fetchContactSuccess = contact => ({type: FETCH_CONTACT_SUCCESS, payload: contact});
export const fetchContactFailure = error => ({type: FETCH_CONTACT_FAILURE, payload: error});

export const deleteContactRequest = () => ({type: DELETE_CONTACT_REQUEST});
export const deleteContactSuccess = () => ({type: DELETE_CONTACT_SUCCESS});
export const deleteContactFailure = error => ({type: DELETE_CONTACT_FAILURE, payload: error});

export const editContactRequest = () => ({type: EDIT_CONTACT_REQUEST});
export const editContactSuccess = () => ({type: EDIT_CONTACT_SUCCESS });
export const editContactFailure = error => ({type: EDIT_CONTACT_FAILURE, payload: error});

export const getContact = id => {
    return async (dispatch) => {
        dispatch(fetchContactRequest());
        try {
            const response = await axiosApi.get(`/contacts/${id}.json`);
            if (response.data !== null) {
                dispatch(fetchContactSuccess(response.data));
            } else {
                dispatch(fetchContactSuccess(null))
            }
        } catch (e) {
            dispatch(fetchContactFailure(e));
            throw e;
        }
    };
};

export const removeContact = id => {
    return async (dispatch) => {
        dispatch(deleteContactRequest());
        try {
            await axiosApi.delete(`/contacts/${id}.json`);
            dispatch(deleteContactSuccess());
        } catch (e) {
            dispatch(deleteContactFailure(e));
            throw e;
        } finally {
            dispatch(getContacts());
        }
    };
};

export const editContactData = (id, data) => {
    return async (dispatch) => {
        dispatch(editContactRequest());
        try {
            await axiosApi.put(`/contacts/${id}.json`, data);
            dispatch(editContactSuccess());
        } catch (e) {
            dispatch(editContactFailure(e));
            throw e;
        } finally {
            dispatch(getContacts());
        }
    };
};