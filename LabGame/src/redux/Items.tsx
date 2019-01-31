import * as ActionTypes from './ActionTypes';
import { ITEMS } from '../shared/items'

export const items = (state = ITEMS
    , action: any) => {
    switch (action.type) {
        case ActionTypes.Add_Item:
            var item = {
                id: 321,
                type: action.payload,
                name: 'test',
                transform: {
                    x: 0,
                    y: 0,
                    angle: 0
                }
            }
            return state.concat(item)
        default:
            return state;
    }
}