export type Props = {
    x: number,
    y: number,
    size: number,
    thickness?: number,
    color?: string,
    pattern?: string,
    r?: number
}

export function BarVertical({
    x,
    y,
    size,
    thickness = 50,
    color = 'black',
    pattern = '',
    r = 0,
}: Props) {
    return (
        <rect 
            rx={r}
            ry={r}
            x={x.toFixed(1).replace('.0', '')} 
            y={y.toFixed(1).replace('.0', '')} 
            width={thickness.toFixed(1).replace('.0', '')}
            height={size.toFixed(1).replace('.0', '')} 
            fill={color} 
        />
    )
}
