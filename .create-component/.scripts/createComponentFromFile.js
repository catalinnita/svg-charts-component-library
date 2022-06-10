const fs = require('fs')
const fse = require('fs-extra')
const replace = require('replace-in-file')
const { parse } = require("csv-parse/sync");

const components = `packages-folder,name,componentDescription,storiesChapter,storiesDomain
charts,Comparison Horizontal Bar Chart,Used to compare two sets of date with same categories,organisms,
charts,Vertical Stacked Timeline Bar Chart,Used to sum multiple values for same entity,organisms,
charts,Vertical Relative Stacked Timeline Bar Chart,Used to show the relative evolution of multiple categories over time,organisms,
charts,Vertical Evolution Bar Chart,Used to show the relative evolution of an entity for two diferent times,organisms,
charts,Current versus estimate trend area,Used to show the evotion over time and the evolution of the estimate,organisms,
charts,Acceleration Trend Line,Used to show how fast or slow a trend accelerates over time,organisms,
charts,Year to year trendline comparison,Used to compare the thrend evolution over a year comparing with a different year,organisms,
charts,Trendline approximation on scattered values,Used to calculate and show a trendline based on values scattered,organisms,
charts,Dense Two Dimension Scatter,Used to show patterns in scattered values,organisms,`;

const records = parse(components, {
  columns: false,
  skip_empty_lines: true
});

records.forEach((row) => {
    const result = {
        'packages-folder': row[0],
        'component-folder': row[1].toLowerCase().split(' ').join('-'),
        'componentName': row[1].toLowerCase().split(' ').map(el => `${el.charAt(0).toUpperCase()}${el.slice(1)}`).join(''),
        'componentDescription': row[2],
        'storiesChapter': row[3],
        'storiesDomain': row[4],
    }
    
    // copy base files from .example folder to new component folder
    fse.copySync('./.create-component/.example-package', `./${result['packages-folder']}/${result['component-folder']}`)

    const files = [
        `./${result['packages-folder']}/${result['component-folder']}/package.json`,
        `./${result['packages-folder']}/${result['component-folder']}/README.md`,
        `./${result['packages-folder']}/${result['component-folder']}/src/*.tsx`
    ]

    // // update values
    replace.sync({
        files,
        from: [
            /component-folder/g, 
            /ComponentName/g, 
            /componentName/g, 
            /ComponentDescription/g,
            /storiesChapter/g,
            /storiesDomain/g,
        ],
        to: [
            `${result['component-folder']}`,
            `${result.componentName[0].toUpperCase()}${result.componentName.slice(1)}`,
            `${result.componentName}`,
            `${result.componentDescription}`,
            `${result.storiesChapter}`,
            `${result.storiesDomain}`,
        ]
    })

    // // rename files
    const folder = `${result['component-folder']}/src`
    fs.rename(`./${result['packages-folder']}/${folder}/componentName.stories.tsx`, `./${result['packages-folder']}/${folder}/${result.componentName}.stories.tsx`, function(err) { if ( err ) console.log(err)})
    fs.rename(`./${result['packages-folder']}/${folder}/componentName.test.tsx`, `./${result['packages-folder']}/${folder}/${result.componentName}.test.tsx`, function(err) { if ( err ) console.log(err)})
    fs.rename(`./${result['packages-folder']}/${folder}/componentName.tsx`, `./${result['packages-folder']}/${folder}/${result.componentName}.tsx`, function(err) { if ( err ) console.log(err)})
})