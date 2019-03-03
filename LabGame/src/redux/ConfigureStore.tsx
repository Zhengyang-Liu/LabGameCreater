import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { sceneInfo } from './Scene';
import { selectedItem, selectedElement } from './SelectedItem';
import { tools } from './Tools';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sceneInfo: sceneInfo,
            tools: tools,
            selectedItem: selectedItem,
            selectedElement: selectedElement
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}