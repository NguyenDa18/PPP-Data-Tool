const neatCsv = require('neat-csv')
const writeJsonFile = require('write-json-file')
const US_States = require('./states.json')
const fs = require('fs')
const over150plusbailouts = fs.readFileSync('./data/All Data by State/150k plus/PPP Data 150k plus.csv')

const readCsv = async () => {
    try {
        const result = await neatCsv(over150plusbailouts)
        return result
    }
    catch (e) {
        console.log(e)
    }
}

const getData = () =>
    Promise.all([readCsv()])
        .catch(() => {
            console.error('🚨 ERROR')
        })
        .then(([result]) => result)

const save = (data, stateAbbrev) => {
    writeJsonFile(`./data/json/${stateAbbrev}.json`, data).then(() => {
        console.log(`✅ ${stateAbbrev} Saved`)
    })
}

exports.generateData = () => {
    getData().then(data => {
        US_States.map(({ abbrev }) => {
            const stateData = data.filter((data) => data.State === abbrev)
            save(stateData, abbrev)
        })
    })
}
