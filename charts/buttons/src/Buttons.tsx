import * as htmlToImage from 'html-to-image';

export type ButtonsI = {
    fileName: string
    data: any[]
    showDownloadPng?: boolean
    showDownloadSvg?: boolean
    showCopySvg?: boolean
    showDownloadData?: boolean
}

export function Buttons({
    fileName,
    data,
    showDownloadPng = true,
    showDownloadSvg = true,
    showCopySvg = true,
    showDownloadData = true,
}: ButtonsI) {

    function downloadFromBase64(dataUrl: string, filename: string) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = filename;
        link.click();
    };

    function downloadFromText(content: string, filename: string, contentType: string) {
        const a = document.createElement('a');
        const file = new Blob([content], {type: contentType});
        a.href= URL.createObjectURL(file);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
    };

    function downloadPng(dataSvgName: string) {
        const el = document.querySelector(`[data-svg-name="${dataSvgName}"]`) as HTMLElement
        if (el) {
            htmlToImage.toPng(el).then((dataUrl) => {
                console.log(dataUrl)
                downloadFromBase64(dataUrl, `${fileName}.png`)
            });
        }
    }

    function downloadSvg(dataSvgName: string) {
        const el = document.querySelector(`[data-svg-name="${dataSvgName}"]`) as HTMLElement
        if (el) {
            const svgCode = el.outerHTML
            downloadFromText(svgCode, `${fileName}.svg`, 'image/svg+xml')
        }
    }

    function copySvg(dataSvgName: string) {
        const el = document.querySelector(`[data-svg-name="${dataSvgName}"]`) as HTMLElement
        const svgCode = el.outerHTML
        navigator.clipboard.writeText(svgCode).then(() => { alert("copied") })
    }

    function convertToCsv(arr: any) {
        const array = [Object.keys(arr[0])].concat(arr)
        return array.map(it => {
            return Object.values(it).toString()
        }).join('\n')
    }

    function downloadData(fileName: string, data: any) {
        const dataCsv = convertToCsv(data)
        downloadFromText(dataCsv, `${fileName}.csv`, 'text/csv')
    }

    const buttonStyle = {
        fontSize: '10px',
        background: '#efefef',
        color: 'black',
        borderWidth: '0',
        padding: '5px',
        marginRight: '3px'
    }

    return (
        <div>
            { showDownloadPng && <button style={buttonStyle} onClick={() => { downloadPng(fileName) }}>Download PNG</button> }
            { showDownloadSvg && <button style={buttonStyle} onClick={() => { downloadSvg(fileName) }}>Download SVG</button> }
            { showCopySvg && <button style={buttonStyle} onClick={() => { copySvg(fileName) }}>Copy SVG</button> }
            { showDownloadData && <button style={buttonStyle} onClick={() => { downloadData(fileName, data) }}>Download Data</button> }
        </div>   
    )
}