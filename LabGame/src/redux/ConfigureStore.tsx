import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { scene } from './Scene';
import { selectedItem } from './SelectedItem';
import { tools } from './Tools';

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