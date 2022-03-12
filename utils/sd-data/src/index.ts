export interface BasicDataI {
    value: number,
}

export function getMax<T extends BasicDataI>(data: T[]) { 
    return data.reduce((acc, curr) => 
        acc = acc < curr.value ? curr.value : acc
    , 0)
}

export function getMin<T extends BasicDataI>(data: T[]) { 
    return data.reduce((acc, curr) => 
        acc = acc > curr.value ? curr.value : acc
    , 0)
}