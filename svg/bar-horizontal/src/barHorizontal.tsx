export type Props = {
    x: number,
    y: number,
    size: number,
    thickness?: number,
    color?: string,
    pattern?: string,
}

export function BarHorizontal({
    x,
    y,
    size,
    thickness = 50,
    color = 'black',
    pattern = '',
}: Props) {
    return (
        <rect 
            x={x} 
            y={y} 
            width={size}
            height={thickness} 
            fill={color} 
        />
    )
}
