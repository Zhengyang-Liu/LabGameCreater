import * as ActionTypes from './ActionTypes';

export const selectedItem = (state = { selectedItem: 0 }, action: any) => {
    switch (action.type) {
        case ActionTypes.SELECT_ITEM:
            state = action.payload;
            return state;
        default:
            return state;
    }
}