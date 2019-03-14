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

export const addStep = () => ({
    type: ActionTypes.ADD_STEP,
})

export const addProperty = (stepNumber: number) =>({
    type: ActionTypes.ADD_PROPERTY,
    payload: stepNumber,
})