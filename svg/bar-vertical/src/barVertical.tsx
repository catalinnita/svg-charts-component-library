export type Props = {
    x: number,
    y: number,
    size: number,
    thickness?: number,
    color?: string,
    pattern?: string,
    r?: number
    className?: string
    displayValue?: string
}

export function BarVertical({
    x,
    y,
    size,
    thickness = 50,
    color = 'black',
    pattern = '',
    r = 0,
    className,
    displayValue
}: Props) {
    return (
        <rect 
            data-value={displayValue}
            className={className}
            rx={r}
            ry={r}
            x={x} 
            y={y} 
            width={thickness}
            height={size} 
            fill={color} 
        />
    )
}
