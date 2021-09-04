export const SET_AUTH = 'SET_AUTH';

export const setAuth = auth => {
    return dispatch => {
        dispatch({
            type: SET_AUTH,
            auth: auth,
        });
    };
};