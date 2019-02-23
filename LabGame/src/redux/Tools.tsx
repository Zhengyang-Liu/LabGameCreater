import { TOOLS } from '../shared/tools';
import * as ActionTypes from './ActionTypes';

export const tools = (state = TOOLS, action: any) => {
    switch (action.type) {
        case ActionTypes.ADD_TOOL:
            var item = action.payload;
            return state.concat(item)
        default:
            return state;
    }
}