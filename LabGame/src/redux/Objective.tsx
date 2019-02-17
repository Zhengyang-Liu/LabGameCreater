import * as ActionTypes from './ActionTypes';

export const objective = (state = {
    item: "",
    description: "",
    property: null
}, action: any) => {
    switch (action.type) {
        case ActionTypes.INIT_OBJECTIVE:
            return { ...state, state: action.payload };
        default:
            return state;
    }
}