import { hexToRgb, interpolateColor } from "@sd/colors"
import { ColorTypeT } from "./types"

export interface GetColorsI<P> {
    (
        colorType: P,  
        value: number, 
        hMin: number,
        hMax: number,
        dataColor?: string, 
        startColor?:string, 
        endColor?: string,
    ): string
}

export const getColors: GetColorsI<ColorTypeT> = (
    colorType,
    value,
    hMin,
    hMax,
    dataColor,
    startColor,
    endColor
) => {

    const min = 0.3
    const max = 0.9

    if (colorType === 'uni' && startColor) {
        return startColor
    }

    if (colorType === 'transparent-gradient' && startColor) {
        const transparency = min + (max-min) * (value - hMin)/(hMax-hMin)
        const rgb = hexToRgb(startColor)
        return `rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${transparency})`
    }

    if (colorType === 'reverse-transparent-gradient' && startColor) {
        const transparency = max - (max-min) * (value - hMin)/(hMax-hMin)
        const rgb = hexToRgb(startColor)
        return `rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${transparency})`
    }

    if (colorType === 'gradient' && startColor && endColor) {
        const color1rgb = Object.values(hexToRgb(startColor))
        const color2rgb = Object.values(hexToRgb(endColor))

        return `rgb(${interpolateColor(color1rgb, color2rgb, (value - hMin)/(hMax-hMin)).join(',')})`
    }

    if (colorType === 'heat-gradient' && startColor && endColor) {
        return 'url(#gradient)'
    }

    return dataColor || 'rgb(0,0,0)';
}