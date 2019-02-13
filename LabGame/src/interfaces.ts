export interface ItemData {
    id: number,
    type: string,
    name: string,
    transform: Transfrom
}

export interface Transfrom {
    x: number,
    y: number,
    angle: number
}