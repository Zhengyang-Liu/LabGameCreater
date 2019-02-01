import * as ActionTypes from './ActionTypes';

export const Scene = (state = {
    items: new Array<any>()
}
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
            return state.items.concat(item);
        case ActionTypes.ADD_ITEMS:
            return { ...state, items: action.payload }
        default:
            return state;
    }
}