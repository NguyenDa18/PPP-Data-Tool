const jsonexport = require('jsonexport')
const fs = require('fs')
const US_States = require('./states.json')

exports.generateDataCsv = () => {
    US_States.map(({ abbrev }) => {
        const reader = fs.createReadStream(`./data/json/${abbrev}.json`);
        const writer = fs.createWriteStream(`./data/csv/${abbrev}.csv`);
        reader.pipe(jsonexport()).pipe(writer)
        console.log(`✅ ${abbrev} CSV Saved`)
    })
    console.log(`🎉 CSV Generation Completed`)
}

