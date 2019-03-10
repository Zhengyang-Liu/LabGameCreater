export type Item = {
    id: number,
    type: string,
    name: string,
    transform: Transform,
    property: any
}

export type Step = {
    item: string,
    description: string,
    property: Property
}

export type Transform = {
    x: number,
    y: number,
    angle: number
}

export type Scene = {
    items: Array<Item>,
    objective: Array<Objective>
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

export type PipetteDataProperty = {
    liquidType: string,
    volume: number
}

export type ContainerDataProperty = {
    liquidType: string,
    volume: number
}

export type TubeDataProperty = {
    liquidType: string,
    volume: number
}