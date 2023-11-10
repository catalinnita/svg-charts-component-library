export type Props = {
    id: string,
    size: number | string,
    startColor: string,
    endColor: string,
}

export function GradientVertical({
    id,
    size,
    startColor,
    endColor,
}: Props) {
    return (
        <linearGradient 
            id={id} 
            gradientUnits="userSpaceOnUse"
            x1="0" 
            y1="0" 
            x2="0" 
            y2={size}
        >
            <stop offset="0" style={{ 
                stopColor: endColor
            }} />
            <stop offset={size} style={{ 
                stopColor: startColor
            }} />
        </linearGradient>
    )
}
