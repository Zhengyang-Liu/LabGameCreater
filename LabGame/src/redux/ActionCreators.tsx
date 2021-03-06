import { baseUrl } from '../shared/baseUrl';
import * as Types from '../types';
import * as ActionTypes from './ActionTypes';

export const importTools = (tools: any) => ({
    type: ActionTypes.IMPORT_TOOLS,
    payload: tools
})

export const addItem = (type: string) => ({
    type: ActionTypes.Add_ITEM,
    payload: type
})

export const newScene = () => ({
    type: ActionTypes.NEW_SCENE
})

export const loadScene = (scene) => ({
    type: ActionTypes.LOAD_SCENE,
    payload: scene
})

export const fetchScene = () => (dispatch) => {
    dispatch(loadingScene());

    return fetch(baseUrl + 'scene')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error: any = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(scene => dispatch(loadScene(scene)))
        .catch(error => dispatch(itemsFailed(error.message)));
}

export const itemsFailed = (errmess) => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errmess
})

export const loadingScene = () => ({
    type: ActionTypes.LOADING_SCENE,
})

export const saveScene = (scene) => ({
    type: ActionTypes.SAVE_SCENE,
    payload: scene
})

export const selectItem = (item: Types.Item) => ({
    type: ActionTypes.SELECT_ITEM,
    payload: item
})

export const selectElement = (element: any) => ({
    type: ActionTypes.SELECT_ELEMENT,
    payload: element
})

export const removeItem = (itemId: number) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: itemId
})

export const addObjectiveStep = () => ({
    type: ActionTypes.ADD_OBJECTIVE_STEP,
})

export const removeObjectiveStep = (stepNumber: number) => ({
    type: ActionTypes.REMOVE_OBJECTIVE_STEP,
    stepNumber: stepNumber,
})

export const addObjectiveProperty = (stepNumber: number) => ({
    type: ActionTypes.ADD_OBJECTIVE_PROPERTY,
    payload: stepNumber,
})

export const removeObjectiveProperty = (stepNumber: number, propertyNumber: number) => ({
    type: ActionTypes.REMOVE_OBJECTIVE_PROPERTY,
    stepNumber: stepNumber,
    propertyNumber: propertyNumber,
})

export const handleObjectiveItemChange = (stepNumber: number, propertyNumber: number, value: string) => ({
    type: ActionTypes.HANDLE_OBJECTIVE_ITEM_CHANGE,
    stepNumber: stepNumber,
    propertyNumber: propertyNumber,
    value: value,
})

export const handleObjectivePropertyNameChange = (stepNumber: number, propertyNumber: number, value: string) => ({
    type: ActionTypes.HANDLE_OBJECTIVE_PROPERTY_NAME_CHANGE,
    stepNumber: stepNumber,
    propertyNumber: propertyNumber,
    value: value,
})

export const handleObjectivePropertyValueChange = (stepNumber: number, propertyNumber: number, value: string) => ({
    type: ActionTypes.HANDLE_OBJECTIVE_PROPERTY_VALUE_CHANGE,
    stepNumber: stepNumber,
    propertyNumber: propertyNumber,
    value: value,
})