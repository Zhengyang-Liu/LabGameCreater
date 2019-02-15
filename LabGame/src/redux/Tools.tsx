import * as ActionTypes from './ActionTypes';
import { TOOLS } from '../shared/tools'

export const tools = (state = TOOLS, action: any) => {
    switch (action.type) {
        case ActionTypes.ADD_TOOL:
            var item = action.payload;
            return state.concat(item)
        default:
            return state;
    }
}