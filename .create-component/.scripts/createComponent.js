const prompt = require('prompt')
const fs = require('fs')
const fse = require('fs-extra')
const replace = require('replace-in-file')

prompt.start()
prompt.get(['packages-folder', 'component-folder', 'componentName', 'componentDescription', 'storiesChapter', 'storiesDomain'], function(err, result) {
    if (err) {
        console.log(err)
        return 1
    }

    // copy base files from .example folder to new component folder
    fse.copySync('./.create-component/.example-package', `./${result['packages-folder']}/${result['component-folder']}`)

    const files = [
        `./${result['packages-folder']}/${result['component-folder']}/package.json`,
        `./${result['packages-folder']}/${result['component-folder']}/README.md`,
        `./${result['packages-folder']}/${result['component-folder']}/src/*.tsx`
    ]

    // update values
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

    // rename files
    const folder = `${result['component-folder']}/src`
    fs.rename(`./${result['packages-folder']}/${folder}/componentName.stories.tsx`, `./${result['packages-folder']}/${folder}/${result.componentName}.stories.tsx`, function(err) { if ( err ) console.log(err)})
    fs.rename(`./${result['packages-folder']}/${folder}/componentName.test.tsx`, `./${result['packages-folder']}/${folder}/${result.componentName}.test.tsx`, function(err) { if ( err ) console.log(err)})
    fs.rename(`./${result['packages-folder']}/${folder}/componentName.tsx`, `./${result['packages-folder']}/${folder}/${result.componentName}.tsx`, function(err) { if ( err ) console.log(err)})
})