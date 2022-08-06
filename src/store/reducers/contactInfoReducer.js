import {FETCH_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS} from "../actions/contactInfoActions";


const initialState = {
    contact: [],
    error: null,
    loading: false,
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACT_REQUEST:
            return {...state, loading: true};
        case FETCH_CONTACT_SUCCESS:
            return {...state, loading: false, contact: action.payload};
        case FETCH_CONTACT_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default contactsReducer;