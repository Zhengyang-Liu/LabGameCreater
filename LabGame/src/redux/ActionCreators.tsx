import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

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

export const saveScene = (scene) => ({
    type: ActionTypes.SAVE_SCENE,
    payload: scene
})

export const selectItem = (itemId: number) => ({
    type: ActionTypes.SELECT_ITEM,
    payload: itemId
})

export const removeItem = (itemId: number) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: itemId
})