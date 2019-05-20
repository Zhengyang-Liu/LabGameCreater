import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import * as Types from '../types';
import * as ActionTypes from './ActionTypes';
import { ItemDataPropertyDictionary } from './ItemDataPropertyDictionary';

let id = -1;

function isLoading(state = true, action) {
    switch (action.type) {
        case ActionTypes.LOAD_SCENE:
            return false;
        case ActionTypes.LOADING_SCENE:
            return true;
        default:
            return state;
    }
}

const scene = reduceReducers(
    combineReducers({
        items,
        objective,
    }),
    (state = {
        items: new Array<Types.Item>(),
        objective: new Array<Types.Step>(),
    }, action) => {
        switch (action.type) {
            case ActionTypes.NEW_SCENE:
                state = {
                    items: new Array<Types.Item>(),
                    objective: new Array<Types.Step>(),
                }
                return state;
            case ActionTypes.LOAD_SCENE:
                state = {
                    items: action.payload.items,
                    objective: action.payload.objective,
                }
                return state;
            default:
                return state;
        }
    }
);

function items(state: Array<Types.Item> = [], action) {
    switch (action.type) {
        case ActionTypes.Add_ITEM:
            if (id == -1) {
                state.forEach(element => {
                    if (element.id > id) {
                        id = element.id
                    }
                });
            }
            return [
                ...state,
                {
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
            ];
        case ActionTypes.REMOVE_ITEM:
            state = state.filter(function (item: Types.Item) {
                return item.id != action.payload;
            })
            return state;
        default:
            return state;
    }
}

function objective(state: Array<Types.Step> = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_OBJECTIVE_STEP:
            return [
                ...state, {
                    title: "",
                    description: "",
                    property: [{
                        item: "",
                        name: "",
                        value: "",
                    }],
                },
            ];
        case ActionTypes.REMOVE_OBJECTIVE_STEP:
            state.splice(action.stepNumber, 1);
            return state;
        case ActionTypes.ADD_OBJECTIVE_PROPERTY:
            let newProperty = {
                item: "",
                name: "",
                value: "",
            }
            state[action.payload].property = state[action.payload].property.concat(newProperty);
            return state;
        case ActionTypes.REMOVE_OBJECTIVE_PROPERTY:
            state[action.stepNumber].property.splice(action.propertyNumber, 1);
            return state;
        case ActionTypes.HANDLE_OBJECTIVE_ITEM_CHANGE:
            return state.map(
                (step, i) => i === action.stepNumber ? {
                    ...step, property: step.property.map(
                        (singleProperty, j) => j === action.propertyNumber ? {
                            ...singleProperty, item: action.value
                        } : singleProperty
                    )
                } : step
            )
        case ActionTypes.HANDLE_OBJECTIVE_PROPERTY_NAME_CHANGE:
            return state.map(
                (step, i) => i === action.stepNumber ? {
                    ...step, property: step.property.map(
                        (singleProperty, j) => j === action.propertyNumber ? {
                            ...singleProperty,
                            name: action.value,
                            value: ""
                        } : singleProperty
                    )
                } : step
            )
        case ActionTypes.HANDLE_OBJECTIVE_PROPERTY_VALUE_CHANGE:
            return state.map(
                (step, i) => i === action.stepNumber ? {
                    ...step, property: step.property.map(
                        (singleProperty, j) => j === action.propertyNumber ? {
                            ...singleProperty,
                            value: action.value,
                        } : singleProperty
                    )
                } : step
            )
        default:
            return state;
    }
}

export const sceneInfo = combineReducers({
    scene,
    isLoading
})