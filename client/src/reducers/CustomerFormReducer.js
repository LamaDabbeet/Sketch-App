import {
  SAVE_IMAGE,
  NAMEC_CHANGED,
  PHONE_CHANGED,
  EMAIL_CHANGED,
  NOTES_CHANGED,
  ADD_CUSTOMER,
  UPLOAD_CLOUD,
  CUSTOMER_SAVE_SUCCESS,
  CUSTOMER_UPDATE
} from '../actions/types';


const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  notes: '',
  image: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_IMAGE:
      return { ...state, image: action.payload };
    case UPLOAD_CLOUD:
      return { ...state, image: action.payload };
    case NAMEC_CHANGED:
      return { ...state, name: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case NOTES_CHANGED:
      return { ...state, notes: action.payload };

    case ADD_CUSTOMER:
      return {
        ...state
      };
    case CUSTOMER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
