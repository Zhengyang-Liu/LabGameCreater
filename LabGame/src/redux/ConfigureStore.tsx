import { createStore, combineReducers, applyMiddleware } from 'redux';
import { items } from './Items'
import { SceneSetting } from '../shared/SceneSetting'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            scene: items,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}