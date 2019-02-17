import { createStore, combineReducers, applyMiddleware } from 'redux';
import { scene } from './Scene'
import { tools } from './Tools'
import { selectedItem } from './SelectedItem'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            scene: scene,
            tools: tools,
            selectedItem: selectedItem
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}