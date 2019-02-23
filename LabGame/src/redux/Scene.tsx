import { Item } from '../types';
import * as ActionTypes from './ActionTypes';
import { ItemPropertyDictionary } from './ItemPropertyDictionary';
let id = -1;

export const scene = (state = {
    items: new Array<Item>(),
    objective: {
        item: '',
        description: '',
        property: {
            name: '',
            value: ''
        }
    }
}, action) => {
    switch (action.type) {
        case ActionTypes.NEW_SCENE:
            state = {
                items: new Array<Item>(),
                objective: {
                    item: '',
                    description: '',
                    property: {
                        name: '',
                        value: ''
                    }
                }
            }
            return state;
        case ActionTypes.LOAD_SCENE:
            state = action.payload;
            return state;
        case ActionTypes.Add_ITEM:
            if (id == -1) {
                state.items.forEach(element => {
                    if (element.id > id) {
                        id = element.id
                    }
                });
            }
            let item: Item = {
                id: ++id,
                type: action.payload,
                name: action.payload + id,
                transform: {
                    x: 0,
                    y: 0,
                    angle: 0
                },
                property: ItemPropertyDictionary[action.payload]
            }
            return { ...state, items: state.items.concat(item) };
        case ActionTypes.REMOVE_ITEM:
            state.items = state.items.filter(function (item: Item) {
                return item.id != action.payload;
            })
            return { ...state };
        default:
            return state;
    }
}