import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "../actions/cActions";

const initialState = {
    loading: false,
    error: null,
};

const CReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {...state, loading: true};
        case ORDER_SUCCESS:
            return {...state, loading: false};
        case ORDER_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
};

export default CReducer;