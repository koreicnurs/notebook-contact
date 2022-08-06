import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SET_MODAL_OPEN
} from "../actions/contactsActions";


const initialState = {
    contacts: [],
    showPurchaseModal: false,
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
            return {...state, loading: false, error: action.payload}
        case SET_MODAL_OPEN:
            return {
                ...state, showPurchaseModal: action.payload
            };
        default:
            return state;
    }
};

export default contactsReducer;