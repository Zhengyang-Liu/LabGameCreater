import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Tools } from './Tools'
import { SceneSetting } from '../shared/SceneSetting'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tools: Tools,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}