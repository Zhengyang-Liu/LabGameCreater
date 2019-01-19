import * as ActionTypes from './ActionsTypes'

export const importTools = (tools: any) => ({
    type: ActionTypes.IMPORT_TOOLS,
    payload: tools
})
