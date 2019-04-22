import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    ADD_CUSTOMER,
    GET_ERRORS,
    GET_CUSTOMERS,
    CUSTOMER_LOADING,
    NAMEC_CHANGED,
    PHONE_CHANGED,
    EMAIL_CHANGED,
    NOTES_CHANGED,
    UPLOAD_CLOUD
} from './types';




export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const nameCChanged = (text) => {
    return {
        type: NAMEC_CHANGED,
        payload: text
    };
};

export const notesChanged = (text) => {
    return {
        type: NOTES_CHANGED,
        payload: text
    };
};

export const phoneChanged = (text) => {
    return {
        type: PHONE_CHANGED,
        payload: text
    };
};

export const uploadCloud = ({ image, name }) => {
    return (dispatch) => {
        debugger;
        axios
            .post('https://calm-sands-26165.herokuapp.com/api/cloudinary', { image, name })
            .then(() => {
                dispatch({
                    type: UPLOAD_CLOUD,
                    payload: { image, name }
                });
            })
            .catch(err => err);
    };
};



//Add Customer
export const addCustomer = ({ name, phone, email, notes, image }) => {
    return (dispatch) => {
        debugger;
        axios
            .post('https://calm-sands-26165.herokuapp.com/api/customers', { name, phone, email, notes, image })
            .then(() => {
                dispatch({
                    type: ADD_CUSTOMER,
                    payload: { name, phone, email, notes, image }
                });
                Actions.customersList({ type: 'reset' });
            })
            .catch(err => err);
    };
};


//Get Cusomters 
export const getCustomers = () => {
    debugger;
    return (dispatch) => {
        dispatch(setCustomerLoading)
        axios
            .get('https://calm-sands-26165.herokuapp.com/api/customers')
            .then(res =>
                dispatch({
                    type: GET_CUSTOMERS,
                    payload: res.data,
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: null
                })
            );
    };
}

// Set loading state
export const setCustomerLoading = () => {
    return {
        type: CUSTOMER_LOADING
    }
}