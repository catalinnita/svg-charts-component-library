export type Props = {
    id: string,
    size: number,
    startColor: string,
    endColor: string,
}

export function GradientHorizontal({
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
            x2={size} 
            y2="0"
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
