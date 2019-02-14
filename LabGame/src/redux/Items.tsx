import * as ActionTypes from './ActionTypes';
import { ItemData } from './../interfaces'

export const Scene = (state = {
    items: new Array<ItemData>()
}
    , action) => {
    switch (action.type) {
        case ActionTypes.Add_Item:
            let item: ItemData = {
                id: 321,
                type: action.payload,
                name: 'test',
                transform: {
                    x: 0,
                    y: 0,
                    angle: 0
                }
            }
            return {...state, items: state.items.concat(item)};
        case ActionTypes.ADD_ITEMS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}