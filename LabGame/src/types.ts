export type Item = {
    id: number,
    type: string,
    name: string,
    transform: Transform,
    property: any
}

export type Transform = {
    x: number,
    y: number,
    angle: number
}

export type Scene = {
    items: Array<Item>,
    objective: Objective
}

export type Objective = {
    item: string,
    description: string,
    property: Property
}

export type Property = {
    name: string,
    value: string
}