import * as ActionTypes from './ActionTypes';
import {ITEMS} from '../shared/items'

export const items = (state = {
    items: ITEMS
}, action: any) => {
    switch (action.type) {
        case ActionTypes.Add_Item:
            var item = action.payload;
            return state.items.concat(item)
        default:
            return state;
    }
}