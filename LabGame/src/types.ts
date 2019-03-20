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
    objective: Array<Step>
}

export type Step = {
    title: string,
    description: string,
    property: Array<Property>,
}

export type Property = {
    item: string,
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