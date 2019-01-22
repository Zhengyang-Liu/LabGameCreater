import * as ActionTypes from './ActionTypes';

export const items = (state = {
    items: []
}, action: any) => {
    switch (action.type) {
        case ActionTypes.Add_Item:
            var item = action.payload;
            return state.items.concat(item)
        default:
            return state;
    }
}