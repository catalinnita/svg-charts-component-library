const prompt = require('prompt')
const fs = require('fs')
const fse = require('fs-extra')
const replace = require('replace-in-file')

prompt.start()
// ask for component folder
// ask for component name 
// ask for component description
prompt.get(['component-folder', 'componentName', 'componentDescription', 'storiesDomain'], function(err, result) {
    if (err) {
        console.log(err)
        return 1
    }

    // copy base files from .example folder to new component folder
    fse.copySync('./.example-package', `./${result['component-folder']}`)

    const files = [
        `${result['component-folder']}/package.json`,
        `${result['component-folder']}/README.md`,
        `${result['component-folder']}/src/*.tsx`
    ]
    
    // update content of each file replacing 
    //    * component-folder
    //    * ComponentName
    //    * componentName
    //    * componentDescription
    //    * storiesChapter
    //    * storiesDomain
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
    fs.rename(`${folder}/componentName.stories.tsx`, `${folder}/${result.componentName}.stories.tsx`, function(err) { if ( err ) console.log(err)})
    fs.rename(`${folder}/componentName.test.tsx`, `${folder}/${result.componentName}.test.tsx`, function(err) { if ( err ) console.log(err)})
    fs.rename(`${folder}/componentName.tsx`, `${folder}/${result.componentName}.tsx`, function(err) { if ( err ) console.log(err)})
})