import axiosApi from "../../axiosApi";
import {fetchContactsFailure, fetchContactsRequest, fetchContactsSuccess} from "./contactsActions";

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

export const fetchContactRequest = () => ({type: FETCH_CONTACT_REQUEST });
export const fetchContactSuccess = contact => ({type: FETCH_CONTACT_SUCCESS, payload: contact});
export const fetchContactFailure = error => ({type: FETCH_CONTACT_FAILURE, payload: error});

export const getContact = id => {
    return async (dispatch) => {
        dispatch(fetchContactRequest());

        try{
            const response = await axiosApi.get(`/contacts/${id}.json`);
            if (response.data !== null) {
                dispatch(fetchContactSuccess(response.data));
            } else {
                dispatch(fetchContactsSuccess(null))
            }
        } catch (e) {
            dispatch(fetchContactFailure(e));
            throw e;
        }
    };
};