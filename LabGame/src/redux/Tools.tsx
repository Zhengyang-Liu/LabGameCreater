import * as ActionTypes from './ActionTypes';
import {TOOLS} from '../shared/tools'

export const tools = (state = {
    tools: TOOLS
}, action: any) => {
    switch (action.type) {
        case ActionTypes.ADD_TOOL:
            var item = action.payload;
            return state.tools.concat(item)
        default:
            return state;
    }
}