export type Props = {
    x: number,
    y: number,
    size?: number,
    color?: string,
    pattern?: string,
    opacity?: number,
}

export function Circle({
    x,
    y,
    size = 3,
    color = 'black',
    pattern = '',
    opacity = 1,
}: Props) {
    return (
        <circle 
            cx={x} 
            cy={y} 
            r={size} 
            fill={color} 
            opacity={opacity}
        />
    )
}
