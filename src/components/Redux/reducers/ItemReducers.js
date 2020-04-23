import { Save_Comments, SET_ERROR_MSG } from '../types/ItemTypes';

const iniState = {
  commentsData: [],
};

export default (state = inistate, action) => {
  switch (action.type) {
    case Save_Comments:
      return {
        ...state,
        commentsData: action.payload,
      };
    default:
      return state;
  }
};
