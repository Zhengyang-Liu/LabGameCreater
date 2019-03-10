import * as Types from '../types';
import * as ActionTypes from './ActionTypes';
import { ItemDataPropertyDictionary } from './ItemDataPropertyDictionary';

let id = -1;

export const sceneInfo = (state = {
    scene: {
        items: new Array<Types.Item>(),
        objective: new Array<Types.Step>(),
    },
    isLoading: true
}, action) => {
    switch (action.type) {
        case ActionTypes.NEW_SCENE:
            state = {
                scene: {
                    items: new Array<Types.Item>(),
                    objective: []
                },
                isLoading: false
            }
            return state;
        case ActionTypes.LOAD_SCENE:
            return { ...state, scene: action.payload, isLoading: false };
        case ActionTypes.LOADING_SCENE:
            return { ...state, isLoading: true }
        case ActionTypes.Add_ITEM:
            if (id == -1) {
                state.scene.items.forEach(element => {
                    if (element.id > id) {
                        id = element.id
                    }
                });
            }
            let item: Types.Item = {
                id: ++id,
                type: action.payload,
                name: action.payload + id,
                transform: {
                    x: 0,
                    y: 0,
                    angle: 0
                },
                property: ItemDataPropertyDictionary[action.payload]
            }
            return {
                ...state, scene: {
                    items: state.scene.items.concat(item),
                    objective: state.scene.objective
                }, isLoading: false
            };
        case ActionTypes.REMOVE_ITEM:
            state.scene.items = state.scene.items.filter(function (item: Types.Item) {
                return item.id != action.payload;
            })
            return { ...state };
        case ActionTypes.ADD_STEP:
            let step: Types.Step = {
                "item": "",
                "description": "",
                "property": {
                    "name": "",
                    "value": ""
                }
            }
            return {
                ...state, scene: {
                    items: state.scene.items,
                    objective: state.scene.objective.concat(step)
                }, isLoading: false
            };
        default:
            return state;
    }
}