import * as ActionTypes from './ActionTypes';
import { ItemData } from '../interfaces'

let id = 0;

export const Scene = (state = {
    items: new Array<ItemData>()
}
    , action) => {
    switch (action.type) {
        case ActionTypes.Add_ITEM:
            let item: ItemData = {
                id: ++id,
                type: action.payload,
                name: 'test',
                transform: {
                    x: 0,
                    y: 0,
                    angle: 0
                }
            }
            return { ...state, items: state.items.concat(item) };
        case ActionTypes.ADD_ITEMS:
            action.payload.forEach(element => {
                if (element.id > id) {
                    id = element.id
                }
            });
            return { ...state, items: action.payload };
        
        default:
            return state;
    }
}