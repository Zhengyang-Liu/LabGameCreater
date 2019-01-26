import * as ActionTypes from './ActionTypes'

export const importTools = (tools: any) => ({
    type: ActionTypes.IMPORT_TOOLS,
    payload: tools
})

export const addItem = (type: string) => ({
    type: ActionTypes.Add_Item,
    payload: type
})