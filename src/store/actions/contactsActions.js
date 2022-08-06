import axiosApi from "../../axiosApi";

export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';

export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen});

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';

export const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST });
export const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, payload: contacts});
export const fetchContactsFailure = error => ({type: FETCH_CONTACTS_FAILURE, payload: error});

export const addContactRequest = () => ({type: ADD_CONTACT_REQUEST });
export const addContactSuccess = contact => ({type: ADD_CONTACT_SUCCESS, payload: contact});
export const addContactFailure = error => ({type: ADD_CONTACT_FAILURE, payload: error});

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
            throw e;
        }
    };
};

export const createContact = data => {

    return async dispatch => {
        try{
            dispatch(addContactRequest());
            await axiosApi.post('/contacts.json', data);
            dispatch(addContactSuccess());
        } catch (error){
            dispatch(addContactFailure(error));
            throw error;
        }
    };
};