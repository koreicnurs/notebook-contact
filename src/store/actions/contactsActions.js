import axiosApi from "../../axiosApi";

export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT  = 'DELETE_CONTACT';
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';

export const addContact = type => ({type: ADD_CONTACT , payload: type});
export const deleteContact = contactId => ({type: DELETE_CONTACT, payload: contactId});
export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen});

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

export const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST });
export const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, payload: contacts});
export const fetchContactsFailure = error => ({type: FETCH_CONTACTS_FAILURE, payload: error});

export const getContacts = () => {
    return async (dispatch) => {
        dispatch(fetchContactsRequest());

        try{
            const response = await axiosApi.get('/contacts.json');
            if (response.data !== null) {
                dispatch(fetchContactsSuccess(response.data));
            } else {
                dispatch(fetchContactsSuccess(null))
            }
        } catch (e) {
            dispatch(fetchContactsFailure(e));
        }
    };
};