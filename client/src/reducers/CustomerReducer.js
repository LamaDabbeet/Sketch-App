import { GET_CUSTOMERS, GET_CUSTOMER, CUSTOMER_LOADING } from '../actions/types';

const INITIAL_STATE = {};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CUSTOMER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_CUSTOMERS:
            return action.payload;

        case GET_CUSTOMER:
            return {
                ...state,
                customer: action.payload,
                loading: false
            };
        default:
            return state;

    }
}