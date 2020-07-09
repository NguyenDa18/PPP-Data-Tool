const neatCsv = require('neat-csv')
const writeJsonFile = require('write-json-file')
const US_States = require('./states.json')
const fs = require('fs')

const readCsv = async (name, abbrev) => {
    try {
        const result = await neatCsv(fs.readFileSync(`./data/All Data by State/${name}/PPP Data up to 150k - ${abbrev}.csv`))
        return result
    }
    catch (e) {
        console.log(e)
    }
}

const getData = ({ name, abbrev }) =>
    Promise.all([readCsv(name, abbrev)])
        .catch(() => {
            console.error('🚨 ERROR')
        })
        .then(([result]) => result)

const save = (data, stateAbbrev) => {
    writeJsonFile(`./data/under150kjson/${stateAbbrev}.json`, data).then(() => {
        console.log(`✅ ${stateAbbrev} Saved`)
    })
}

const generateData = () => {
    const AL = US_States[0]
    // US_States.map(state => {
    //     getData(state).then(data => {
    //         save(data, abbrev)
    //     })
    // })
    getData(AL).then(data => {
        save(data, 'AL')
    })
}

generateData()
