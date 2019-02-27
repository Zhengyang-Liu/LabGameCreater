import * as ActionTypes from './ActionTypes';

export const selectedItem = (state =  null, action: any) => {
    switch (action.type) {
        case ActionTypes.SELECT_ITEM:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export const selectedElement = (state =  null, action: any) => {
    switch (action.type) {
        case ActionTypes.SELECT_ELEMENT:
            state = action.payload;
            return state;
        default:
            return state;
    }
}