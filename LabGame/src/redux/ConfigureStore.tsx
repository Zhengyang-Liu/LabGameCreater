import { combineForms } from 'react-redux-form';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import * as Types from '../types';
import { sceneInfo } from './Scene';
import { selectedElement, selectedItem } from './SelectedItem';
import { tools } from './Tools';

const initScene = {
    items: new Array<Types.Item>(),
    objective: {
        item: '',
        description: '',
        property: {
            name: '',
            value: ''
        }
    }
};

export const ConfigureStore = () => {
    const store = createStore(
        combineForms({
            sceneInfo: sceneInfo,
            tools: tools,
            selectedItem: selectedItem,
            selectedElement: selectedElement
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}