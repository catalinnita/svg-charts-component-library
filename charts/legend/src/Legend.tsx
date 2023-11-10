import { LegendI } from "./types";

export function Legend({
    title,
    titleColor = 'dark-gray',
    titleFontSize = 18,
    description,
    descriptionColor = 'light-gray',
    descriptionFontSize = 14,
    pos = 'top',
    align = 'middle',
    chartWidth,
    chartHeight,
    chartPadding,
    spacing = [0, 0, 0, 0],
}: LegendI) {
    
    const titleStyle = {
        fontFamily: 'system-ui',
        fontWeight: 400,
        fontSize: `${titleFontSize}px`,
        letterSpacing: '-0.025em',
        fill: `${titleColor}`,
        textAnchor: `${align}`,
        dominantBaseline: `${pos === 'bottom' ? 'bottom' : 'middle'}`
    }

    const descriptionStyle = {
        fontFamily: 'system-ui',
        fontWeight: 400,
        fontSize: `${descriptionFontSize}px`,
        letterSpacing: '-0.025em',
        fill: `${descriptionColor}`,
        textAnchor: `${align}`,
        dominantBaseline: `${pos === 'bottom' ? 'bottom' : 'middle'}`
    }

    const getX = () => {
        if (align === 'middle') {
            return chartWidth/2
        }

        if (align === 'start') {
            return spacing[3]
        }

        if (align === 'end') {
            return chartWidth - spacing[1]
        }

        return 0
    }

    const getY = () => {
        if (pos === 'top') {
            return spacing[0]
        }
        if (pos === 'bottom') {
            return chartHeight - spacing[2]
        }

        return 0
    }
    
    if (!title && !description) {
        return null
    } 

    return (
        <>
            {title && 
                <text 
                    y={getY()} 
                    x={getX()} 
                    style={titleStyle}>{title}</text>
                }    
            
            {description && 
                <text
                    y={getY() + titleFontSize} 
                    x={getX()} 
                    style={descriptionStyle}>{description}</text>}
        </>
    )
}