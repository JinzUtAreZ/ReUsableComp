import { Save_Comments, SET_ERROR_MSG } from '../types/ItemTypes';

export const saveComments = () => async (dispatch) => {
  try {
    const response = await axios(
      'https://jsonplaceholder.typicode.com/comments'
    );
    console.log(response);

    dispatch({
      type: Save_Comments,
      payload: response,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: SET_ERROR_MSG,
      dispatch: err.response.statusText,
    });
  }
};
