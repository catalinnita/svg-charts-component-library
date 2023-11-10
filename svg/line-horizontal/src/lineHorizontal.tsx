export type Props = {
    x: number,
    y: number,
    size: number,
    thickness?: number,
    color?: string,
    pattern?: string,
}

export function LineHorizontal({
    x,
    y,
    size,
    thickness = 1,
    color = 'black',
    pattern = '0',
}: Props) {
    return (
        <polyline 
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray={pattern}
            points={`${x},${y} ${(x + size)},${y}`}>
        </polyline>
    )
}
