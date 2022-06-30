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
            points={`${x.toFixed(1).replace('.0', '')},${y.toFixed(1).replace('.0', '')} ${(x + size).toFixed(1).replace('.0', '')},${y.toFixed(1).replace('.0', '')}`}>
        </polyline>
    )
}
