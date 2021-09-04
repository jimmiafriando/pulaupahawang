import {SET_AUTH} from '../../action/AuthAction'

const initialState = {
    auth: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            console.log("AUTH ACTION", action.auth)
            return {
                ...state,
                auth: action.auth
            };
            default:
                return state;
    }
}