import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Scene } from './Items'
import { tools } from './Tools'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            scene: Scene,
            tools: tools
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}