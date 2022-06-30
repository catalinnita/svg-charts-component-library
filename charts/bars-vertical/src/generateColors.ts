import { hexToRgb, interpolateColor } from "@scrambled-data/colors"
import { getMax, getMin } from "@scrambled-data/data"
import { ColorTypeT, CommonDataT } from "./types"

export interface GenerateColorsI<T, D> {
    (
        data: D,
        colors?: string[],
        type?: T,
    ): {
        colors: string[]
        svg: JSX.Element | null
    }
}

export const generateColors: GenerateColorsI<ColorTypeT, CommonDataT> = (
    data, 
    colors = ['#8f55e5', '#81fd02'], 
    type = 'uni'
) => {
    console.log({colors, type})
    
    if (type === 'data') {
        return {
            colors: data.map(({ color }) => color),
            svg: null
        }
    }

    if (type === 'provided') {
        return {
            colors: data.map(( _, index ) => colors[index % colors.length]),
            svg: null
        }
    }

    if (type === 'gradient') {
        const color1rgb = Object.values(hexToRgb(colors[0]))
        const color2rgb = Object.values(hexToRgb(colors[1]))
        const hMax = getMax(data)
        const hMin = getMin(data)

        return {
            colors: data.map(({ value }) => `rgb(${interpolateColor(color1rgb, color2rgb, (value - hMin) / (hMax-hMin) ).join(',')})`),
            svg: null
        }
    }

    if (type === 'heat-gradient') {
        return {
            colors: data.map(() => `url(#gradient)`),
            svg: null
        }
    }

    if (type === 'transparent-gradient') {
        const minT = 0.3
        const maxT = 0.9
        const hMax = getMax(data)
        const hMin = getMin(data)
        return {
            colors: data.map(({ value }) => {
                const transparency = minT + (maxT-minT) * (value - hMin)/(hMax-hMin)
                const rgb = hexToRgb(colors[0])
                return `rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, ${transparency})`
            }),
            svg: null
        }
    }

    return {
        colors: data.map(() => colors[0]),
        svg: null
    }
}
