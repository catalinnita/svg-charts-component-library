export function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
}

export function interpolateColor(color1: number[], color2: number[], factor: number) {
    if (arguments.length < 3) { 
        factor = 0.5; 
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}

export function getColorsInBetween(color1: string, color2: string, size: number) { 
    // @ts-ignore
    const color1rgb = Object.values(hexToRgb(color1))
    // @ts-ignore
    const color2rgb = Object.values(hexToRgb(color2))
    const colors = [];
    const step = 1 / (size - 1)

    for(var i = 0; i < size; i++) {
        colors.push(interpolateColor(color1rgb, color2rgb, step * i))
    }
}