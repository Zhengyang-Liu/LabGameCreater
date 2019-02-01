import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

export const importTools = (tools: any) => ({
    type: ActionTypes.IMPORT_TOOLS,
    payload: tools
})

export const addItem = (type: string) => ({
    type: ActionTypes.Add_Item,
    payload: type
})

export const addItems = (items) => ({
    type: ActionTypes.ADD_ITEMS,
    payload: items
});


export const fetchItems = () => (dispatch) =>{
    return fetch(baseUrl + 'items')
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
    .then(items => dispatch(addItems(items)))
    .catch(error => dispatch(itemsFailed(error.message)));
}

export const itemsFailed = (errmess) => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errmess
})