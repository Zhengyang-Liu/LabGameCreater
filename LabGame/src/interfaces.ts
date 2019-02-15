export interface ItemData {
    id: number,
    type: string,
    name: string,
    transform: Transform
}

export interface Transform {
    x: number,
    y: number,
    angle: number
}