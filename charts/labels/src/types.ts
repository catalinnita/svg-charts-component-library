export type LabelsS = {
    width?: number,
    height?: number,
    tipSize?: number,
    strokeSize?: number,
    strokeColor?: string,
    fillColor?: string,
    textColor?: string,
    fontSize?: number,
    initialOpacity?: number,
}

export type LabelsI = {
    barThickness: number,
    propsData: {
        x: number,
        y: number,
        displayValue: string,
    }[]
}