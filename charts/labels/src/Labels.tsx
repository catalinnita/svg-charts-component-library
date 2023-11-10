import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family"
import { LabelsS } from "."
import { LabelsI } from "./types"

export function Labels({
    barThickness,
    propsData,
    width = 46,
    height = 16,
    tipSize = 10,
    strokeSize = 1,
    strokeColor = 'black',
    fillColor = 'black',
    textColor = 'white',   
    fontSize = 10, 
    initialOpacity = 0,
}: LabelsI & LabelsS): JSX.Element {
    const createLabelPath = (width: number, height: number, tip: number) => {
        const hStart = 0
        const hEnd = width 
        const hTipLeft = (width - tip) / 2 
        const hTipRight = (width + tip) / 2
        const hTipMiddle= width / 2

        const vStart = 0
        const vEnd = height 
        const vTipLeft = height
        const vTipRight = height 
        const vTipMiddle = height + tip/2
        
        const path = `M${hEnd} ${hStart}H${vStart}V${vEnd}H${hTipLeft}L${hTipMiddle} ${vTipMiddle}L${hTipRight} ${vTipRight}H${hEnd}V${vStart}Z`

        return <path d={path} />
    }

    const styleText = (x: number, y: number) => ({ transform: `translate(${x + barThickness / 2}, ${y-10})` })

    const css = `
        .text {
            opacity: ${initialOpacity};
            top: 0px;
            transition: opacity 0.1s;
        }
        .text text {
            font-size: ${fontSize}px;
            font-family: 'arial';
            dominant-baseline: middle;
            text-anchor: middle;
            fill: ${textColor};
        }
        .text path {
            fill: ${fillColor};
            stroke-width: ${strokeSize}px;
            stroke: ${strokeColor};
            transform: translate(-${width/2}px, -${height - tipSize/2 - 2}px)
        }
        ${ propsData.reduce((acc, {x, y}, index) => {
            return `${acc} .bar-${index}:hover ~ .text-${index} { 
                opacity: 1; 
                transform: translate(${x + barThickness / 2}, ${y-10}),
            }`
        }, '')}
    `   

    return (
        <>
            <style>{css}</style>
        { propsData.map(({x, y, displayValue}, index) => {
            return (
                
                <g 
                    className={`text text-${index}`} 
                    key={`text-${displayValue}`} 
                    {...styleText(x, y)}
                >
                    {createLabelPath(width, height, tipSize)}
                    <text>{displayValue}</text>
                </g>
        )})}
        </>
    )
}