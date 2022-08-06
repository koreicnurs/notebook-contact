import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SET_PURCHASING_OPEN
} from "../actions/contactsActions";

const initialState = {
    contacts: [],
    purchasing: false,
    error: null,
    loading: false,
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {...state, loading: true};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contacts: action.payload};
        case FETCH_CONTACTS_FAILURE:
            return {...state, loading: false, error: action.payload};
        case SET_PURCHASING_OPEN:
            return {
                ...state, purchasing: action.payload
            };
        default:
            return state;
    }
};

export default contactsReducer;